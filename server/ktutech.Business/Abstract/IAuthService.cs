using ktutech.Business.DTOs.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ktutech.Business.Abstract
{
    public interface IAuthService
    {
        Task RegisterAsync(RegisterDto registerDto);
    }
}
