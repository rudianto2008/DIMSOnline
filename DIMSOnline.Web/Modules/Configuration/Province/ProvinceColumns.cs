
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.Province")]
    [BasedOnRow(typeof(Entities.ProvinceRow), CheckNames = true)]
    public class ProvinceColumns
    { 
        [EditLink]
        public String ProvinceCode { get; set; }
        public String ProvinceName { get; set; }
        public String IslandIslandName { get; set; }
    }
}