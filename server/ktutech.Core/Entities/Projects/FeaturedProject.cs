using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Projects;

public class FeaturedProject : BaseEntity
{
    public int ProjectId { get; set; }
    public Project Project { get; set; } = default!;
    public int Month { get; set; }
    public int Year { get; set; }
}