using ktutech.Core.Entities.Interns;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class InternCategoryRepository : GenericRepository<InternCategory>, IInternCategoryRepository
{
    public InternCategoryRepository(KtutechDbContext context) : base(context)
    {
    }
}