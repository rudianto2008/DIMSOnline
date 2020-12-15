
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.City")]
    [BasedOnRow(typeof(Entities.CityRow), CheckNames = true)]
    public class CityForm
    {
        public String CityCode { get; set; }
        public Int32 ProvinceId { get; set; }
        public Int32 IslandId { get; set; }
        public String CityName { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}