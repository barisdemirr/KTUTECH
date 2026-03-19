using ktutech.Core.Entities.Common;
using ktutech.DataAccess.Abstract.Common;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        protected readonly KtutechDbContext _context;
        private readonly DbSet<T> _dbSet;

        public GenericRepository(KtutechDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public async Task AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task RemoveAsync(T entity)
        {
            _dbSet.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<List<T>> GetAllAsync()
        {
            return await _dbSet.AsNoTracking().ToListAsync();
        }

        public async Task<T?> GetByFilterAsync(Expression<Func<T, bool>> filter)
        {
            return await _dbSet
                .AsNoTracking()
                .FirstOrDefaultAsync(filter);
        }

        public async Task<int> CountAsync()
        {
            return await _dbSet.AsNoTracking().CountAsync();
        }
    }
}
