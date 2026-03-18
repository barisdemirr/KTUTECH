using ktutech.Core.Entities.TeammateListings;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class TeammateApplicationRepository : GenericRepository<TeammateApplication>, ITeammateApplicationRepository
{
    public TeammateApplicationRepository(KtutechDbContext context) : base(context)
    {
    }
}