using System;
using System.Collections.Generic;
using System.Text;

namespace Friends.Core.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Message> Messages { get; set; }
    }
}
