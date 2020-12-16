
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
        [Required]
        public Int32 IslandId { get; set; }
        [Required]
        public Int32 ProvinceId { get; set; }
        [Required]
        public String CityCode { get; set; }
        [Required]
        public String CityName { get; set; }
    }
}