using Friends.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Friends.Core.Services
{
    public interface IMessageService
    {
        Task<IEnumerable<Message>> GetAllWithUser();
        Task<IEnumerable<Message>> GetAllByReceiver(int id);
        Task<Message> GetMessageById(int id);
        Task<IEnumerable<Message>> GetMessagesByUserId(int userId);
        Task<Message> CreateMessage(Message newMessage);
        Task UpdateMessage(Message messageToUpdate, Message message);
        Task DeleteMessage(Message message);
    }
}
