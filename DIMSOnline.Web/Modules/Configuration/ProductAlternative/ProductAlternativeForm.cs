
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.ProductAlternative")]
    [BasedOnRow(typeof(Entities.ProductAlternativeRow), CheckNames = true)]
    public class ProductAlternativeForm
    {
        public Int32 ProductId { get; set; }
        public Int32 ProductIdAlt { get; set; }
        public Int16 SeqNo { get; set; }
        public Boolean Combine { get; set; }
    }
}