using ktutech.Core.Entities.Common;
using ktutech.Core.Entities.Announcements;
using ktutech.Core.Entities.Events;
using ktutech.Core.Entities.Interns;
using ktutech.Core.Entities.NewsItems;
using ktutech.Core.Entities.Projects;
using ktutech.Core.Entities.TeammateListings;
using ktutech.Core.Entities.Users;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace ktutech.DataAccess.Concrete.EntityFramework.Context
{
    public class KtutechDbContext : DbContext
    {
        public KtutechDbContext(DbContextOptions<KtutechDbContext> options) : base(options)
        {
        }

        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<EventCategory> EventCategories { get; set; }
        public DbSet<Intern> Interns { get; set; }
        public DbSet<InternCategory> InternCategories { get; set; }
        public DbSet<NewsItem> NewsItems { get; set; }
        public DbSet<NewsCategory> NewsCategories { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectCategory> ProjectCategories { get; set; }
        public DbSet<ProjectImage> ProjectImages { get; set; }
        public DbSet<FeaturedProject> FeaturedProjects { get; set; }
        public DbSet<TeammateListing> TeammateListings { get; set; }
        public DbSet<TeammateCategory> TeammateCategories { get; set; }
        public DbSet<TeammateApplication> TeammateApplications { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                if (typeof(BaseEntity).IsAssignableFrom(entityType.ClrType))
                {
                    var method = typeof(KtutechDbContext)
                        .GetMethod(nameof(ApplySoftDeleteFilter), BindingFlags.NonPublic | BindingFlags.Instance)
                        ?.MakeGenericMethod(entityType.ClrType);

                    method?.Invoke(this, new object[] { modelBuilder });
                }
            }
        }

        private void ApplySoftDeleteFilter<T>(ModelBuilder modelBuilder) where T : BaseEntity
        {
            modelBuilder.Entity<T>().HasQueryFilter(x => !x.IsDeleted);
        }

        public override int SaveChanges()
        {
            UpdateTimestamps();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            UpdateTimestamps();
            return base.SaveChangesAsync(cancellationToken);
        }

        private void UpdateTimestamps()
        {
            var entries = ChangeTracker.Entries()
                .Where(e => e.Entity is BaseEntity &&
                            (e.State == EntityState.Added || e.State == EntityState.Modified));

            foreach (var entry in entries)
            {
                var entity = (BaseEntity)entry.Entity;
                var now = DateTime.Now;

                if (entry.State == EntityState.Added)
                {
                    entity.CreatedAt = now;
                }
                else
                {
                    Entry(entity).Property(x => x.CreatedAt).IsModified = false;
                    entity.UpdatedAt = now;
                }
            }
        }
    }
}