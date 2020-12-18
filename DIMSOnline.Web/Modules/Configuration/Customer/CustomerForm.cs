
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
        [Category("Customer Info")]
        [ReadOnly(true)]
        public String CustomerNumber { get; set; }
        public String CustomerName { get; set; }
        public String BirthPlace { get; set; }
        public DateTime BirthDate { get; set; }
        public String Npwp { get; set; }
        public String ContactPerson { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
        [Category("Customer Address")]
        public Int32 ProvinceId { get; set; }
        public Int32 CityId { get; set; }
        public String Address { get; set; }
        public Int32 PostCode { get; set; }
       
    }
}