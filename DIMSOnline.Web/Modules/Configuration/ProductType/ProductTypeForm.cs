
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.ProductType")]
    [BasedOnRow(typeof(Entities.ProductTypeRow), CheckNames = true)]
    public class ProductTypeForm
    {
        public String ProductTypeName { get; set; }
    }
}