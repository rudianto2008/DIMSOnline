
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.ProductPrice")]
    [BasedOnRow(typeof(Entities.ProductPriceRow), CheckNames = true)]
    public class ProductPriceForm
    {
        public String ProductPriceNumber { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public Decimal Price { get; set; }
        public Boolean Continued { get; set; }
    }
}