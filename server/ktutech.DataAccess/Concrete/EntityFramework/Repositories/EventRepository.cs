using ktutech.Core.Entities.Events;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class EventRepository : GenericRepository<Event>, IEventRepository
{
    public EventRepository(KtutechDbContext context) : base(context)
    {
    }
}