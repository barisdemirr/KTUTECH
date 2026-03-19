using ktutech.Business.Abstract.Common;
using ktutech.Core.Entities.Users;

namespace ktutech.Business.Abstract
{
    public interface IUserService : IGenericService<User>
    {
        Task<User?> TGetByEmailAsync(string email);
    }
}
