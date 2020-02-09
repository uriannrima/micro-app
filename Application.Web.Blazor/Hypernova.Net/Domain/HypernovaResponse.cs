using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hypernova.Net.Domain
{

    public class HypernovaResponse
    {
        public bool Success { get; set; }
        public object Error { get; set; }
        public HypernovaResults Results { get; set; }
    }
}
