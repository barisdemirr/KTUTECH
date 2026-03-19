using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ktutech.Business.DTOs.User
{
    public class RegisterDto
    {
        public string NameSurname { get; set; } = default!;
        public string Email { get; set; } = default!;
        public string Phone { get; set; } = default!;
        public string? Department { get; set; }
        public string Password { get; set; } = default!;
    }
}
