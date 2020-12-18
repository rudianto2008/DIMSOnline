
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.ProductAlternative")]
    [BasedOnRow(typeof(Entities.ProductAlternativeRow), CheckNames = true)]
    public class ProductAlternativeColumns
    {
        public String ProductProductNumber { get; set; }
        public Int32 ProductIdAlt { get; set; }
        public Int16 SeqNo { get; set; }
        public Boolean Combine { get; set; }
    }
}