
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.CategoryUnit")]
    [BasedOnRow(typeof(Entities.CategoryUnitRow), CheckNames = true)]
    public class CategoryUnitForm
    {
        public String CategoryUnitName { get; set; }
        public Decimal PricePerHour { get; set; }
    }
}