using System;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace Application.Web.Blazor.Data
{

    public class ReadingDTO
    {
        public int Temperature { get; set; }
    }

    public class WeatherForecastService
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public IHttpClientFactory ClientFactory { get; private set; }

        public WeatherForecastService(IHttpClientFactory clientFactory)
        {
            ClientFactory = clientFactory;
        }

        public async Task<WeatherForecast[]> GetForecastAsync(DateTime startDate)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(async index => new WeatherForecast
            {
                Date = startDate.AddDays(index),
                TemperatureC = (await GetTemperature().ConfigureAwait(false)).Temperature,
                Summary = Summaries[rng.Next(Summaries.Length)]
            }).Select(t => t.Result).ToArray();
        }

        public async Task<ReadingDTO> GetTemperature()
        {
            using (var client = this.ClientFactory.CreateClient())
            {
                var response = await client.GetAsync(new Uri("http://localhost:8081/temperature")).ConfigureAwait(false);
                response.EnsureSuccessStatusCode();

                using var responseStream = await response.Content.ReadAsStreamAsync();
                return await JsonSerializer.DeserializeAsync<ReadingDTO>(responseStream, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true,
                });
            }
        }
    }
}
