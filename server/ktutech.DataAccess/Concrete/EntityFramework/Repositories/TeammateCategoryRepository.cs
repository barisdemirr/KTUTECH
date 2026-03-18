using ktutech.Core.Entities.TeammateListings;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class TeammateCategoryRepository : GenericRepository<TeammateCategory>, ITeammateCategoryRepository
{
    public TeammateCategoryRepository(KtutechDbContext context) : base(context)
    {
    }
}