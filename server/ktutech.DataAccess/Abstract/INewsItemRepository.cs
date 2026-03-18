using ktutech.Core.Entities.NewsItems;
using ktutech.DataAccess.Abstract.Common;

namespace ktutech.DataAccess.Abstract;

public interface INewsItemRepository : IGenericRepository<NewsItem>
{
}