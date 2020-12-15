
using Serenity.Extensibility;
using System.ComponentModel;

namespace DIMSOnline.Configuration
{
    [NestedPermissionKeys]
    [DisplayName("Configuration")]
    public class PermissionKeys
    {
        [Description("Configuration Setting For DIMS Online")]
        public const string Configuration = "Administration:Configuration";

    }
}
