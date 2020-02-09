using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hypernova.Net.Domain
{

    public class HypernovaContentRequest
    {
        public HypernovaRequestContent Content { get; set; }


    }

    public class HypernovaJobsRequest
    {
        public IList<HypernovaRequestContent> Jobs { get; set; }
    }
}
