
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerForm
    {
        public String CustomerNumber { get; set; }
        public Int32 CompanyId { get; set; }
        public String CustomerName { get; set; }
        public Int32 ProvinceId { get; set; }
        public Int32 CityId { get; set; }
        public String Address { get; set; }
        public String Pic { get; set; }
        public Int32 IslandId { get; set; }
        public Int32 PostCode { get; set; }
        public String Phone { get; set; }
        public String ContactPerson { get; set; }
        public String Fax { get; set; }
        public String BirthPlace { get; set; }
        public DateTime BirthDate { get; set; }
        public String Email { get; set; }
        public String Npwp { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
        public Int16 DeleteUserId { get; set; }
        public DateTime DeleteDate { get; set; }
    }
}