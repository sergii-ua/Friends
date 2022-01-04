using System;
using System.Collections.Generic;
using System.Text;

namespace Friends.Core.Models
{
    public class Message
    {
        public int MessageId { get; set; }
        public string MessageBody { get; set; }
        public int MessageFromId { get; set; }
        public int MessageToId { get; set; }
        public User Sender { get; set; }
        public User Recepient { get; set; }

    }
}
