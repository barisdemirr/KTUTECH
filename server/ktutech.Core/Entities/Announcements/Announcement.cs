using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Announcements;

public class Announcement : BaseEntity
{
    public string Title { get; set; } = default!;
    public string Content { get; set; } = default!;
    public bool IsActive { get; set; } = true;
}