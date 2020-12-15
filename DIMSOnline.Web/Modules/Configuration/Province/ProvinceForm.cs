
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.Province")]
    [BasedOnRow(typeof(Entities.ProvinceRow), CheckNames = true)]
    public class ProvinceForm
    {
        public String ProvinceCode { get; set; }
        public Int32 IslandId { get; set; }
        public String ProvinceName { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}