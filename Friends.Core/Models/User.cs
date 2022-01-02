using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace Friends.Core.Models
{
    public class User
    {
        public User()
        {
            Messages = new Collection<Message>();
        }
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Message> Messages { get; set; }
    }
}
