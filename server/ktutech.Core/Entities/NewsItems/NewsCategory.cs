using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.NewsItems;

public class NewsCategory : CategoryBaseEntity
{
    public ICollection<NewsItem> News { get; set; } = new HashSet<NewsItem>();
}