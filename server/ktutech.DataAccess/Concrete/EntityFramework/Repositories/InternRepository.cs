using ktutech.Core.Entities.Interns;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class InternRepository : GenericRepository<Intern>, IInternRepository
{
    public InternRepository(KtutechDbContext context) : base(context)
    {
    }
}