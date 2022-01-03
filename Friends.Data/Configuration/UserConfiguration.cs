using Friends.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Friends.Data.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder
                .HasKey(u => u.UserId);
            builder
                .Property(u => u.UserId)
                .UseIdentityColumn();
            builder
                .Property(u => u.FirstName)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(u => u.LastName)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .ToTable("Users");
        }
    }
}
