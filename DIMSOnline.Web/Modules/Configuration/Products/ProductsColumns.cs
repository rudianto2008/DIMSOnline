
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductId { get; set; }
        [EditLink]
        public String ProductNumber { get; set; }
        public String ModelName { get; set; }
        public String CategoryUnitCategoryUnitName { get; set; }
        public String UnitStock { get; set; }
        public String PartNumber { get; set; }
        public String ProductTypeProductTypeName { get; set; }
        public Int32 MinimumStock { get; set; }
        public Boolean Continued { get; set; }
        public String ProductImage { get; set; }
        public String Description { get; set; }
        public String BinLocation { get; set; }
        public Int32 StockQuantity { get; set; }
    }
}