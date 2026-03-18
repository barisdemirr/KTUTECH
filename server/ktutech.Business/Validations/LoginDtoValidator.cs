using FluentValidation;
using ktutech.Business.DTOs.User;

namespace ktutech.Business.Validations
{
    public class LoginDtoValidator : AbstractValidator<LoginDto>
    {
        public LoginDtoValidator()
        {
            RuleFor(x => x.Email)
            .NotEmpty().WithMessage("E-posta adresi zorunludur.")
            .EmailAddress().WithMessage("Lütfen geçerli bir e-posta formatı giriniz.");

            RuleFor(x => x.Password)
                .NotEmpty().WithMessage("Şifre alanı boş bırakılamaz.");
        }
    }
}
