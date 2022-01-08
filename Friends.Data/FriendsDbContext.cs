using Friends.Core.Models;
using Friends.Core.Models.Auth;
using Friends.Data.Configuration;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Friends.Data
{
    public class FriendsDbContext : IdentityDbContext<Account, Role, Guid>
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }

        public FriendsDbContext(DbContextOptions<FriendsDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder
                .ApplyConfiguration(new MessageConfiguration());
            modelBuilder
                .ApplyConfiguration(new UserConfiguration());

        }
    }
}
