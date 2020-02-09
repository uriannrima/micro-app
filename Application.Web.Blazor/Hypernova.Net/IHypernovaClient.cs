using Hypernova.Net.Domain;
using System.Threading.Tasks;

namespace Hypernova.Net
{
    public interface IHypernovaClient
    {
        Task<HypernovaResponse> BatchAsync(HypernovaContentRequest request);
    }
}