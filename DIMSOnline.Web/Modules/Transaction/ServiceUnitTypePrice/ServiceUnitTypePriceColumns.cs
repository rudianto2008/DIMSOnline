
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.ServiceUnitTypePrice")]
    [BasedOnRow(typeof(Entities.ServiceUnitTypePriceRow), CheckNames = true)]
    public class ServiceUnitTypePriceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ServiceUnitTypePriceId { get; set; }
        public String CategoryUnitCategoryUnitName { get; set; }
        public Decimal PricePerHour { get; set; }
    }
}