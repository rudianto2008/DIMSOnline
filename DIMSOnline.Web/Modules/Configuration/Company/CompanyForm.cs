
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.Company")]
    [BasedOnRow(typeof(Entities.CompanyRow), CheckNames = true)]
    public class CompanyForm
    {
        public String CompanyName { get; set; }
        public String Address { get; set; }
        public String Fax { get; set; }
        public String Logo { get; set; }
        public String Phone { get; set; }
        public String ContactPerson { get; set; }
        public Int32 IslandId { get; set; }
        public Int32 ProvinceId { get; set; }
        public Int32 CityId { get; set; }
        public String OfficeType { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 DeleteUserId { get; set; }
        public DateTime DeleteDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}