using ktutech.Core.Entities.Events;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class EventCategoryRepository : GenericRepository<EventCategory>, IEventCategoryRepository
{
    public EventCategoryRepository(KtutechDbContext context) : base(context)
    {
    }
}