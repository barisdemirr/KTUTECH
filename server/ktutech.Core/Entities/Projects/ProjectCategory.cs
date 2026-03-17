using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Projects;

public class ProjectCategory : CategoryBaseEntity
{
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public ICollection<Project> Projects { get; set; }
}