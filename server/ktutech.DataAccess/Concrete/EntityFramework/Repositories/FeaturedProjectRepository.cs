using ktutech.Core.Entities.Projects;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class FeaturedProjectRepository : GenericRepository<FeaturedProject>, IFeaturedProjectRepository
{
    public FeaturedProjectRepository(KtutechDbContext context) : base(context)
    {
    }
}