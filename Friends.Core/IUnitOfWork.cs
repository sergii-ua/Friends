using Friends.Core.Repositories;
using System;
using System.Threading.Tasks;

namespace Friends.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IMessageRepository Messages { get;  }
        IUserRepository Users { get;  }
        Task<int> ComitAsync();
    }
}
