﻿using Friends.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Friends.Core.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetUserById(int id);
        Task<User> CreateUser(User newUser);
        Task UpdateUser(User userToBeUpdated, User user);
        Task DeleteUser(User user);
    }
}
