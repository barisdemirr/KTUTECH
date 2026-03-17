using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Projects;

public class ProjectImage : BaseEntity
{
    public string ImageUrl { get; set; }
    public bool IsCover { get; set; }
    public int ProjectId { get; set; }
    public Project Project { get; set; }
}