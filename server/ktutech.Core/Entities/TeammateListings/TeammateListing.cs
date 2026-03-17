using ktutech.Core.Entities.Common;
using ktutech.Core.Entities.Users;

namespace ktutech.Core.Entities.TeammateListings;

public class TeammateListing : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
    public int CategoryId { get; set; }
    public TeammateCategory TeammateCategory { get; set; }
    public bool IsActive { get; set; }
    public ICollection<TeammateApplication> Applications { get; set; }
}