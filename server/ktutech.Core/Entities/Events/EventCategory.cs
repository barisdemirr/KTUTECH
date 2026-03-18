using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Events;

public class EventCategory : CategoryBaseEntity
{
    public ICollection<Event> Events { get; set; } = new HashSet<Event>();
}