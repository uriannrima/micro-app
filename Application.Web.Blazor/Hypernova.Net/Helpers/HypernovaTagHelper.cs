using Hypernova.Net.Domain;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;

namespace Hypernova.Net.TagHelpers
{

    [HtmlTargetElement("hypernova")]
    public class HypernovaTagHelper : TagHelper
    {

        private readonly IHypernovaClient HypernovaClient;

        public string Component { get; set; }

        public object Data { get; set; }

        public object Metadata { get; set; }

        public HypernovaTagHelper(IHypernovaClient hypernovaClient)
        {
            HypernovaClient = hypernovaClient;
            Data = new object();
            Metadata = new object();
        }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            output = output ?? throw new ArgumentNullException(nameof(output));

            output.TagName = null;
            output.TagMode = TagMode.StartTagAndEndTag;

            IDictionary<string, object> metadata = new ExpandoObject();
            foreach (var attribute in context.AllAttributes.Where(a => !"component".Equals(a.Name.ToLowerInvariant()) && !"data".Equals(a.Name.ToLowerInvariant())))
            {
                metadata[attribute.Name] = attribute.Value?.ToString();
            }

            var renderRequest = new HypernovaContentRequest
            {
                Content = new HypernovaRequestContent
                {
                    Name = Component,
                    Data = Data,
                    Metadata = metadata
                }
            };

            try
            {
                var renderResponse = await HypernovaClient.BatchAsync(renderRequest).ConfigureAwait(false);
                if (renderResponse.Success)
                {
                    output.Content.SetHtmlContent(renderResponse.Results.Content.Html);
                }
            }
            catch (Exception)
            {
                // Log somehow
            }

            await base.ProcessAsync(context, output).ConfigureAwait(false);
        }
    }

    [HtmlTargetElement("hypernova-script")]

    public class HypernovaClientScriptTagHelper : TagHelper
    {

        public string Component { get; set; }

        private readonly HypernovaConfiguration Configuration;

        public HypernovaClientScriptTagHelper(IOptions<HypernovaConfiguration> configuration)
        {
            Configuration = configuration.Value;
        }

        public override Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            output = output ?? throw new ArgumentNullException(nameof(output));

            output.TagName = null;
            output.TagMode = TagMode.StartTagAndEndTag;
            output.Content.SetHtmlContent($"<script src='{this.Configuration.ClientScriptUri}/{Component}.js'></script>");

            return base.ProcessAsync(context, output);
        }
    }
}
