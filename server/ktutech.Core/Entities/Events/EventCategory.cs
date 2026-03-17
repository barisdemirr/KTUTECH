using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Events;

public class EventCategory : CategoryBaseEntity
{
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public ICollection<Event> Events { get; set; }
}