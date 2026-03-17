using ktutech.Core.Entities.Common;
using ktutech.Core.Entities.Events;
using ktutech.Core.Entities.Projects;
using ktutech.Core.Entities.TeammateListings;
using ktutech.Core.Enums;

namespace ktutech.Core.Entities.Users;

public class User : BaseEntity
{
    public string NameSurname { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public Role Role { get; set; }
    public bool IsVerified { get; set; }
    public string PasswordHash { get; set; }
    public string RefreshToken { get; set; }
    public DateTime RefreshExpire { get; set; }

    public ICollection<Event> Events { get; set; }
    public ICollection<Project> Projects { get; set; }
    public ICollection<TeammateListing> TeammateListings { get; set; }
}