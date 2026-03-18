using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Interns;

public class Intern : BaseEntity
{
    public string CompanyName { get; set; } = default!;
    public string Role { get; set; } = default!;
    public string? ImageUrl { get; set; }
    public int CategoryId { get; set; }
    public InternCategory InternCategory { get; set; } = default!;
    public string DateRange { get; set; } = default!;
    public bool IsActive { get; set; } = true;
    public string ApplyLink { get; set; } = default!;
}