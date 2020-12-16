
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.Company")]
    [BasedOnRow(typeof(Entities.CompanyRow), CheckNames = true)]
    public class CompanyColumns
    {
        [EditLink, Width(300)]
        public String CompanyName { get; set; }
        [Width(400)]
        public String Address { get; set; }
        [Width(150)]
        public String ProvinceProvinceName { get; set; }
        [Width(150)]
        public String CityCityName { get; set; }
        [Width(150)]
        public String Phone { get; set; }
        [Width(200)]
        public String ContactPerson { get; set; }
    }
}