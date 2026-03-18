using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ktutech.DataAccess.Abstract.Common
{
    public interface IGenericDal<T> where T : class
    {
        Task AddAsync(T entity);
        Task RemoveAsync(T entity);
        Task UpdateAsync(T entity);
        Task<List<T>> GetAllAsync();
        Task<T?> GetByIdAsync(int id);
        Task<int> CountAsync();
    }
}
