
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.ProductBasePrice")]
    [BasedOnRow(typeof(Entities.ProductBasePriceRow), CheckNames = true)]
    public class ProductBasePriceColumns
    {
        [EditLink]
        public String ProductBasePriceNumber { get; set; }
        public String ProductProductNumber { get; set; }
        public Decimal Price { get; set; }
        public Decimal ActualPrice { get; set; }
        public Boolean Continued { get; set; }
    }
}