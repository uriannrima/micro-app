using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hypernova.Net.Domain
{
    public class HypernovaRequestContent
    {
        public string Name { get; set; }
        public object Data { get; set; }
        public object Metadata { get; set; }
    }
}
