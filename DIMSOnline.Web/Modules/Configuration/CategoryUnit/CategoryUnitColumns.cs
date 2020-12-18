
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
        [EditLink, Width(200)]
        public String CategoryUnitName { get; set; }
        [Width(150)]
        public Decimal PricePerHour { get; set; }
    }
}