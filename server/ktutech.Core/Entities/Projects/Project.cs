using ktutech.Core.Entities.Common;
using ktutech.Core.Entities.Users;

namespace ktutech.Core.Entities.Projects;

public class Project : BaseEntity
{
    public string Title { get; set; } = default!;
    public string Description { get; set; } = default!;
    public int CategoryId { get; set; }
    public ProjectCategory ProjectCategory { get; set; } = default!;
    public int UserId { get; set; }
    public User User { get; set; } = default!;
    public ICollection<ProjectImage> Images { get; set; } = new HashSet<ProjectImage>();
}