
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.Island")]
    [BasedOnRow(typeof(Entities.IslandRow), CheckNames = true)]
    public class IslandColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IslandId { get; set; }
        [EditLink]
        public String IslandCode { get; set; }
        public String IslandName { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}