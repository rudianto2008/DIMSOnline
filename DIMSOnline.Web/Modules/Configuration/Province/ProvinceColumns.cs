
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProvinceId { get; set; }
        [EditLink]
        public String ProvinceCode { get; set; }
        public String IslandIslandCode { get; set; }
        public String ProvinceName { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}