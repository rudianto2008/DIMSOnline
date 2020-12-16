using Serenity.Extensibility;
using System.ComponentModel;

namespace DIMSOnline.Transaction
{
    [NestedPermissionKeys]
    [DisplayName("Transaction")]
    public class PermissionKeys
    {
        [Description("Transaction Setting For DIMS Online")]
        public const string Transaction = "Administration:Transaction";

    }
}
