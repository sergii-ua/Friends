using Friends.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Friends.Core.Repositories
{
    public interface IMessageRepository : IRepository<Message>
    {
        Task<IEnumerable<Message>> GetAllWithUserByIdAsync();
        Task<Message> GetWithUserByIdAsync();
        Task<IEnumerable<Message>> GetAllWithUserByUserIdAsync();
    }
}
