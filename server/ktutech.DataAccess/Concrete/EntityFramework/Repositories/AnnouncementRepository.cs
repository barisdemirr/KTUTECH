using ktutech.Core.Entities.Announcements;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories;

public class AnnouncementRepository : GenericRepository<Announcement>, IAnnouncementRepository
{
    public AnnouncementRepository(KtutechDbContext context) : base(context)
    {
    }
}