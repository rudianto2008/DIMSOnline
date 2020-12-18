
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.ProductType")]
    [BasedOnRow(typeof(Entities.ProductTypeRow), CheckNames = true)]
    public class ProductTypeColumns
    {
        [EditLink]
        public String ProductTypeName { get; set; }
    }
}