using ktutech.Core.Entities.NewsItems;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class NewsCategoryRepository : GenericRepository<NewsCategory>, INewsCategoryRepository
{
    public NewsCategoryRepository(KtutechDbContext context) : base(context)
    {
    }
}