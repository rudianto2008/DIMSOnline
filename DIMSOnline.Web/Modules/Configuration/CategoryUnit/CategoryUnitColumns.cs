
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.CategoryUnit")]
    [BasedOnRow(typeof(Entities.CategoryUnitRow), CheckNames = true)]
    public class CategoryUnitColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CategoryUnitId { get; set; }
        [EditLink]
        public String CategoryUnitName { get; set; }
        public Decimal PricePerHour { get; set; }
    }
}