using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Friends.Resources
{
    public class SaveMessageResource
    {
        public string MessageBody { get; set; }
        public int MessageFromId { get; set; }
        public int MessageToId { get; set; }
    }
}
