using ktutech.Core.Entities.Common;

namespace ktutech.Core.Entities.Interns;

public class InternCategory : CategoryBaseEntity
{
    public ICollection<Intern> Interns { get; set; }= new HashSet<Intern>();
}