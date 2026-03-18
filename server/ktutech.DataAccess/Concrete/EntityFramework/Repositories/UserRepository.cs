using ktutech.Core.Entities.Users;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class UserRepository : GenericRepository<User>, IUserRepository
{
    public UserRepository(KtutechDbContext context) : base(context)
    {
    }
}