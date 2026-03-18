using ktutech.Core.Entities.Common;
using ktutech.Core.Entities.Users;

namespace ktutech.Core.Entities.TeammateListings;

public class TeammateApplication : BaseEntity
{
    public int TeammateListingId { get; set; }
    public TeammateListing TeammateListing { get; set; } = default!;
    public int UserId { get; set; }
    public User User { get; set; } = default!;
}