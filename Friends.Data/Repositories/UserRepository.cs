using Friends.Core.Models;
using Friends.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Friends.Data.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private readonly FriendsDbContext _dbContext;
        public UserRepository(FriendsDbContext context) : base(context)
        {
            _dbContext = context;
        }
        public async Task<IEnumerable<User>> GetAllWithMessagesAsync()
        {
            return await _dbContext.Users
                .Include(u => u.MessagesSent)
                .Include(m=>m.MessagesReceived)
                .ToListAsync();
        }

        public async Task<User> GetWithMessagesByIdAsync(int id)
        {
            return await _dbContext.Users
                .Include(m => m.MessagesSent)
                .Include(n=>n.MessagesReceived)
                .SingleOrDefaultAsync(m => m.UserId == id);
        }
    }
}
