
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.ProductBasePrice")]
    [BasedOnRow(typeof(Entities.ProductBasePriceRow), CheckNames = true)]
    public class ProductBasePriceForm
    {
        public String ProductBasePriceNumber { get; set; }
        public Int32 ProductId { get; set; }
        public Decimal Price { get; set; }
        public Decimal ActualPrice { get; set; }
        public Boolean Continued { get; set; }
    }
}