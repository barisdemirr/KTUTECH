using ktutech.Core.Entities.Common;
using ktutech.Core.Entities.Users;

namespace ktutech.Core.Entities.TeammateListings;

public class TeammateListing : BaseEntity
{
    public string Title { get; set; } = default!;
    public string Description { get; set; } = default!;
    public int UserId { get; set; }
    public User User { get; set; } = default!;
    public int CategoryId { get; set; }
    public TeammateCategory TeammateCategory { get; set; } = default!;
    public bool IsActive { get; set; }
    public ICollection<TeammateApplication> Applications { get; set; } = new HashSet<TeammateApplication>();
}