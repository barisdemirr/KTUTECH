using ktutech.Core.Entities.Common;
using ktutech.Core.Entities.Events;
using ktutech.Core.Entities.Projects;
using ktutech.Core.Entities.TeammateListings;
using ktutech.Core.Enums;

namespace ktutech.Core.Entities.Users;

public class User : BaseEntity
{
    public string NameSurname { get; set; } = default!;
    public string Email { get; set; } = default!;
    public string Phone { get; set; } = default!;
    public string? Department { get; set; }
    public Role Role { get; set; }
    public bool IsVerified { get; set; }
    public string PasswordHash { get; set; } = default!;
    public string? RefreshToken { get; set; }
    public DateTime? RefreshExpire { get; set; }
    public ICollection<Event> Events { get; set; } = new HashSet<Event>();
    public ICollection<Project> Projects { get; set; } = new HashSet<Project>();
    public ICollection<TeammateListing> TeammateListings { get; set; } = new HashSet<TeammateListing>();
    public ICollection<TeammateApplication> TeammateApplications { get; set; } = new HashSet<TeammateApplication>();
}