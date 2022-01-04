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
                .HasOne(m => m.Sender)
                .WithMany(m => m.MessagesSent)
                .HasForeignKey(m => m.MessageFromId)
                .OnDelete(DeleteBehavior.Restrict);
            builder
                .HasOne(m => m.Recepient)
                .WithMany(m => m.MessagesReceived)
                .HasForeignKey(m => m.MessageToId)
                .OnDelete(DeleteBehavior.Restrict);
            builder
                .ToTable("Messages");
        }
    }
}
