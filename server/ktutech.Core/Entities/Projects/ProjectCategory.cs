using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Projects;

public class ProjectCategory : CategoryBaseEntity
{
    public ICollection<Project> Projects { get; set; } = new HashSet<Project>();
}