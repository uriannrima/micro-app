using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hypernova.Net.Domain
{
    public class HypernovaContent
    {
        public string Name { get; set; }

        public string Html { get; set; }

        public object Meta { get; set; }

        public float Duration { get; set; }

        public System.Net.HttpStatusCode StatusCode { get; set; }

        public bool Success { get; set; }

        public object Error { get; set; }
    }
}
