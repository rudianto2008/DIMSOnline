
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.ProductPrice")]
    [BasedOnRow(typeof(Entities.ProductPriceRow), CheckNames = true)]
    public class ProductPriceColumns
    {
        [EditLink]
        public String ProductPriceNumber { get; set; }
        public String ProductProductNumber { get; set; }
        public String OrderCategoryOrderCategoryName { get; set; }
        public Decimal Price { get; set; }
        public Boolean Continued { get; set; }
    }
}