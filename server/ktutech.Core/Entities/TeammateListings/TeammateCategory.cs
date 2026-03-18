using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.TeammateListings;

public class TeammateCategory : CategoryBaseEntity
{
    public ICollection<TeammateListing> TeammateListings { get; set; } = new HashSet<TeammateListing>();
}