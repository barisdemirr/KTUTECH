using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Announcements;

public class Announcement : BaseEntity
{
    public string Title { get; set; }
    public string Content { get; set; }
    public bool IsActive { get; set; }
}