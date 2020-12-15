
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CityId { get; set; }
        [EditLink]
        public String CityCode { get; set; }
        public String ProvinceProvinceCode { get; set; }
        public Int32 IslandId { get; set; }
        public String CityName { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}