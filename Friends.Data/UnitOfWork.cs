using Friends.Core;
using Friends.Core.Repositories;
using Friends.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Friends.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly FriendsDbContext _dbContext;
        private MessageRepository messageRepository;
        private UserRepository userRepository;

        public UnitOfWork(FriendsDbContext context)
        {
            _dbContext = context;
        }
        public IMessageRepository Messages =>
            messageRepository = messageRepository ?? new MessageRepository(_dbContext);

        public IUserRepository Users =>
            userRepository = userRepository ?? new UserRepository(_dbContext);

        public async Task<int> ComitAsync()
        {
            return await _dbContext.SaveChangesAsync();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }
    }
}
