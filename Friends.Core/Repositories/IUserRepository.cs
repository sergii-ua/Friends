using Friends.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Friends.Core.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<IEnumerable<User>> GetAllWithMessagesAsync();
        Task<User> GetWithMessagesByIdAsync();
    }
}
