using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Interns;

public class InternCategory : CategoryBaseEntity
{
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public ICollection<Intern> Interns { get; set; }
}