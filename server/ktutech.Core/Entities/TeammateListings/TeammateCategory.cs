using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.TeammateListings;

public class TeammateCategory : CategoryBaseEntity
{
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public ICollection<TeammateListing> TeammateListings { get; set; }
}