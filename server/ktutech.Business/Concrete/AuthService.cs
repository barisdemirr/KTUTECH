using FluentValidation;
using ktutech.Business.Abstract;
using ktutech.Business.DTOs.User;
using ktutech.Core.Entities.Users;
using ktutech.Core.Enums;
using Microsoft.AspNetCore.Identity;

namespace ktutech.Business.Concrete
{
    public class AuthService : IAuthService
    {
        private readonly IUserService _userService; 
        private readonly IValidator<RegisterDto> _registerValidator;
        private readonly IPasswordHasher<User> _passwordHasher;

        public AuthService(IUserService userService, IValidator<RegisterDto> registerValidator, IPasswordHasher<User> passwordHasher)
        {
            _userService = userService;
            _registerValidator = registerValidator;
            _passwordHasher = passwordHasher;
        }

        public async Task RegisterAsync(RegisterDto registerDto)
        {
            // 1. Bekçiye sor: Veriler doğru mu?
            var validationResult = await _registerValidator.ValidateAsync(registerDto);
            if (!validationResult.IsValid)
                throw new Exception(validationResult.Errors.First().ErrorMessage);

            // 2. UserService'e sor: Bu mail zaten var mı?
            var existingUser = await _userService.TGetByEmailAsync(registerDto.Email);
            if (existingUser != null)
                throw new Exception("E-posta zaten kayıtlı!");

            // 3. Entity'i hazırla
            var user = new User
            {
                NameSurname = registerDto.NameSurname,
                Email = registerDto.Email,
                Phone = registerDto.Phone,
                Role = Role.User,
                IsVerified = false,
                Department = registerDto.Department
            };

            // 4. Şifreyi Identity ile mühürle
            user.PasswordHash = _passwordHasher.HashPassword(user, registerDto.Password);

            // 5. UserService üzerinden veritabanına fırlat
            await _userService.TAddAsync(user);
        }
    }
}
