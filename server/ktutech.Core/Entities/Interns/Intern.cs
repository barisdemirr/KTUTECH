using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Interns;

public class Intern : BaseEntity
{
    public string CompanyName { get; set; }
    public string Role { get; set; }
    public string ImageUrl { get; set; }
    public int CategoryId { get; set; }
    public InternCategory InternCategory { get; set; }
    public string DateRange { get; set; }
    public bool IsActive { get; set; } = true;
    public string ApplyLink { get; set; }
}