using Friends.Core.Models;
using Friends.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Friends.Data.Repositories
{
    public class MessageRepository : Repository<Message>, IMessageRepository
    {
        private readonly FriendsDbContext _dbContext;
        public MessageRepository(FriendsDbContext context) : base(context)
        {
            _dbContext = context;
        }

        public async Task<IEnumerable<Message>> GetAllWithRecepientAsync(int userId)
        {
            return await _dbContext.Messages
                .Where(x => x.MessageToId == userId)
                .ToListAsync();
        }

        public async Task<IEnumerable<Message>> GetAllWithUserAsync()
        {
            return await _dbContext.Messages
                .Include(m => m.Sender)
                .Include(n=>n.Recepient)
                .ToListAsync();
        }

        public async Task<IEnumerable<Message>> GetAllWithUserByUserIdAsync(int userId)
        {
            return await _dbContext.Messages
                .Include(m => m.MessageFromId)
                .Where(m => m.MessageFromId == userId)
                .ToListAsync();
        }

        public async Task<int> GetMessageCountByUserId(int userId)
        {
            return await _dbContext.Messages
                .Include(m => m.Sender)
                .Where(m => m.MessageFromId == userId)
                .CountAsync();
        }

        public async Task<Message> GetWithUserByIdAsync(int id)
        {
            return await _dbContext.Messages
                .Include(m => m.MessageId)
                .SingleOrDefaultAsync(m => m.MessageId == id);
        }
    }
}
