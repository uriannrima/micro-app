using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace Hypernova.Net.Helpers
{
    public static class HypernovaServiceProviderExtensions
    {
        public static void AddHypernovaClient(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddHttpClient();
            services.AddOptions();
            services.Configure<HypernovaConfiguration>(configuration.GetSection("HypernovaConfiguration"));
            services.AddSingleton<IHypernovaClient, HypernovaClient>();
        }

        public static void AddHypernovaClient(this IServiceCollection services, HypernovaConfiguration configuration)
        {
            services.AddHttpClient();
            services.AddSingleton(configuration);
            services.AddSingleton<IHypernovaClient, HypernovaClient>();
        }
    }
}
