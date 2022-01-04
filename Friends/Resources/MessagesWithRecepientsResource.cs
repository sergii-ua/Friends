using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Friends.Resources
{
    public class MessagesWithRecepientsResource
    {
        public int MessageId { get; set; }
        public string MessageBody { get; set; }
        public string Sender { get; set; }
        public string Recepient { get; set; }

    }
}
