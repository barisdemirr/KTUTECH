using ktutech.Core.Entities.Projects;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class ProjectCategoryRepository : GenericRepository<ProjectCategory>, IProjectCategoryRepository
{
    public ProjectCategoryRepository(KtutechDbContext context) : base(context)
    {
    }
}