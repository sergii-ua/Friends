using Friends.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Friends.Core.Repositories
{
    public interface IMessageRepository : IRepository<Message>
    {
        Task<IEnumerable<Message>> GetAllWithUserAsync();
        Task<Message> GetWithUserByIdAsync(int id);
        Task<IEnumerable<Message>> GetAllWithUserByUserIdAsync(int userId);
        Task<int> GetMessageCountByUserId(int userId);
    }
}
