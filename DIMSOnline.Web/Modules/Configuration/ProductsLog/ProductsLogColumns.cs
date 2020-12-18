
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.ProductsLog")]
    [BasedOnRow(typeof(Entities.ProductsLogRow), CheckNames = true)]
    public class ProductsLogColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductLogId { get; set; }
        public Int32 ProductId { get; set; }
        [EditLink]
        public String ModelName { get; set; }
        public String UnitStock { get; set; }
        public String PartNumber { get; set; }
        public Int32 ProductTypeId { get; set; }
        public Boolean Continued { get; set; }
        public String ProductImage { get; set; }
        public String Description { get; set; }
        public String BinLocation { get; set; }
        public Int16 OperationType { get; set; }
        public Int32 ChangingUserId { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime ValidUntil { get; set; }
    }
}