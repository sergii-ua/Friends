using Friends.Core.Models;
using Friends.Data.Configuration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Friends.Data
{
    public class FriendsDbContext : DbContext
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
