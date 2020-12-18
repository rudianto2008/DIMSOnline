
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.BinLocation")]
    [BasedOnRow(typeof(Entities.BinLocationRow), CheckNames = true)]
    public class BinLocationForm
    {
        [Required]
        public String BinLocation { get; set; }
    }
}