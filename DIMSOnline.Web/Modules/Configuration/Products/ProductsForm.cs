
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsForm
    {
        public String ProductNumber { get; set; }
        public String ModelName { get; set; }
        public Int32 CategoryUnitId { get; set; }
        public Int32 UnitStockId { get; set; }
        public String PartNumber { get; set; }
        public Int32 ProductTypeId { get; set; }
        public Int32 MinimumStock { get; set; }
        public Boolean Continued { get; set; }
        public String ProductImage { get; set; }
        public String Description { get; set; }
        public Int32 BinLocationId { get; set; }
        public Int32 StockQuantity { get; set; }
    }
}