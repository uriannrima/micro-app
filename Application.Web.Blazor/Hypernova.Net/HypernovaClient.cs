using Hypernova.Net.Domain;
using Microsoft.Extensions.Options;
using System;
using System.Net.Http;
using System.Net.Mime;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Hypernova.Net
{
    public class HypernovaClient : IHypernovaClient
    {
        IHttpClientFactory HttpClientFactory { get; set; }

        HypernovaConfiguration Configuration { get; set; }

        JsonSerializerOptions SerializeOptions { get; set; } = new JsonSerializerOptions()
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        JsonSerializerOptions DeserializeOptions { get; set; } = new JsonSerializerOptions()
        {
            PropertyNameCaseInsensitive = true,
        };

        public HypernovaClient(IHttpClientFactory httpClientFactory, IOptions<HypernovaConfiguration> configuration)
        {
            HttpClientFactory = httpClientFactory;
            Configuration = configuration.Value;
        }

        public HypernovaClient(IHttpClientFactory httpClientFactory, IOptions<HypernovaConfiguration> configuration, JsonSerializerOptions jsonSerializerOptions)
        {
            HttpClientFactory = httpClientFactory;
            Configuration = configuration.Value;
            SerializeOptions = jsonSerializerOptions;
        }

        public async Task<HypernovaResponse> BatchAsync(HypernovaContentRequest request)
        {
            var requestContent = JsonSerializer.Serialize(request, this.SerializeOptions);

            using var requestBody = new StringContent(requestContent, Encoding.UTF8, MediaTypeNames.Application.Json);

            using var client = HttpClientFactory.CreateClient();
            var response = await client.PostAsync(GetUri(), requestBody).ConfigureAwait(false);

            using var responseStream = await response.Content.ReadAsStreamAsync().ConfigureAwait(false);
            var hypernovaResponse = await JsonSerializer.DeserializeAsync<HypernovaResponse>(responseStream, this.DeserializeOptions);

            return hypernovaResponse;
        }

        private Uri GetUri() => new Uri($"{this.Configuration.Uri}{this.Configuration.BatchEndpoint}");
    }
}
