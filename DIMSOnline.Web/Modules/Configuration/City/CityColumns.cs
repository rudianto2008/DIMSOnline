
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.City")]
    [BasedOnRow(typeof(Entities.CityRow), CheckNames = true)]
    public class CityColumns
    {
        [EditLink]
        public String CityCode { get; set; }
        [Width(400)]
        public String CityName { get; set; }
        [DisplayName("Province Name")]
        public String ProvinceProvinceName { get; set; }
        [DisplayName("Island Name")]
        public String IslandIslandName { get; set; }

    }
}