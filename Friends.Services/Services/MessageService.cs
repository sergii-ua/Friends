using Friends.Core;
using Friends.Core.Models;
using Friends.Core.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Friends.Business.Services
{
    public class MessageService : IMessageService
    {
        private readonly IUnitOfWork _unitOfWork;

        public MessageService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<Message> CreateMessage(Message newMessage)
        {
            await _unitOfWork.Messages.AddAsync(newMessage);
            await _unitOfWork.ComitAsync();
            return newMessage; 
        }

        public async Task DeleteMessage(Message message)
        {
            _unitOfWork.Messages.Remove(message);
            await _unitOfWork.ComitAsync();
        }

        public async Task<IEnumerable<Message>> GetAllByReceiver(int userId)
        {
            return await _unitOfWork.Messages.GetAllWithRecepientAsync(userId);
        }

        public Task<IEnumerable<Message>> GetAllMessagesWithRecepients()
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Message>> GetAllWithUser()
        {
            return await _unitOfWork.Messages.GetAllWithUserAsync();
        }

        public async Task<Message> GetMessageById(int id)
        {
            return await _unitOfWork.Messages.GetByIdAsync(id);
        }

        public async Task<IEnumerable<Message>> GetMessagesByUserId(int userId)
        {
            return await _unitOfWork.Messages.GetAllWithUserByUserIdAsync(userId);
        }

        public async Task UpdateMessage(Message messageToUpdate, Message message)
        {
            messageToUpdate.MessageBody = message.MessageBody;
            messageToUpdate.MessageFromId = message.MessageFromId;
            messageToUpdate.MessageToId = message.MessageToId;
            await _unitOfWork.ComitAsync();
        }
    }
}
