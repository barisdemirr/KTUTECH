using ktutech.Core.Entities.NewsItems;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class NewsItemRepository : GenericRepository<NewsItem>, INewsItemRepository
{
    public NewsItemRepository(KtutechDbContext context) : base(context)
    {
    }
}