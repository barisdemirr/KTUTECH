using ktutech.Core.Entities.Common;
using ktutech.Core.Entities.Users;

namespace ktutech.Core.Entities.Events;

public class Event : BaseEntity
{
    public string Name { get; set; } = default!;
    public string Description { get; set; } = default!;
    public string? ImageUrl { get; set; }
    public bool IsActive { get; set; } = true;
    public int CategoryId { get; set; }
    public EventCategory EventCategory { get; set; } = default!;
    public DateTime EventDate { get; set; }
    public string Location { get; set; } = default!;
    public string? ApplyLink { get; set; }
    public int UserId { get; set; }
    public User User { get; set; } = default!;
}