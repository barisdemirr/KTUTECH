using ktutech.Business.Abstract;
using ktutech.Business.Concrete.Common;
using ktutech.Core.Entities.Users;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Abstract.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ktutech.Business.Concrete
{
    public class UserService : GenericService<User>, IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository) : base(userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User?> TGetByEmailAsync(string email)
        {
            return await _userRepository.GetByFilterAsync(x => x.Email == email);
        }
    }
}
