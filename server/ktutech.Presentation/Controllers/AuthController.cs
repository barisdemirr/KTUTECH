using ktutech.Business.Abstract;
using ktutech.Business.DTOs.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ktutech.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto registerDto)
        {
            await _authService.RegisterAsync(registerDto);

            return Ok(new { message = "Kayıt işlemi başarıyla tamamlandı kanka!" });
        }
    }
}
