
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.BinLocation")]
    [BasedOnRow(typeof(Entities.BinLocationRow), CheckNames = true)]
    public class BinLocationColumns
    {
        [EditLink]
        public String BinLocation { get; set; }
    }
}