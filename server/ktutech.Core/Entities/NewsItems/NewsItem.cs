using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.NewsItems;

public class NewsItem : BaseEntity
{
    public string Title { get; set; }
    public string Content { get; set; }
    public string ImageUrl { get; set; }
    public int NewsCategoryId { get; set; }
    public NewsCategory NewsCategory { get; set; }
    public string Source { get; set; }
    public string SourceLink { get; set; }
    public bool ShowOnHero { get; set; }
}