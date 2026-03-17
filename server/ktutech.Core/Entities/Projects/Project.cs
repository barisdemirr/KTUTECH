using ktutech.Core.Entities.Common;
using ktutech.Core.Entities.Users;

namespace ktutech.Core.Entities.Projects;

public class Project : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public int CategoryId { get; set; }
    public ProjectCategory ProjectCategory { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
    public ICollection<ProjectImage> Images { get; set; }
}