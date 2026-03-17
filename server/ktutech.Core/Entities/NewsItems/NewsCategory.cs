using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.NewsItems;

public class NewsCategory : CategoryBaseEntity
{
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public ICollection<NewsItem> News { get; set; }
}