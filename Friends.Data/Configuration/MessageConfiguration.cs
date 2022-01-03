using Friends.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Friends.Data.Configuration
{
    public class MessageConfiguration : IEntityTypeConfiguration<Message>
    {
        public void Configure(EntityTypeBuilder<Message> builder)
        {
            builder
                .HasKey(m => m.MessageId);
            builder
                .Property(m => m.MessageId)
                .UseIdentityColumn();
            builder
                .Property(m => m.MessageBody)
                .IsRequired()
                .HasMaxLength(1000);
            builder
                .HasOne(m => m.User)
                .WithMany(m => m.Messages)
                .HasForeignKey(m => m.MessageFromId);
            builder
                .HasOne(m => m.User)
                .WithMany(m => m.Messages)
                .HasForeignKey(m => m.MessageToId);
            builder
                .ToTable("Messages");
        }
    }
}
