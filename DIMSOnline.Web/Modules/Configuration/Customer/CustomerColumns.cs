
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerColumns
    {
        [EditLink, Width(150)]
        public String CustomerNumber { get; set; }
        [Width(200), DisplayName("Company Name")]
        public String CompanyCompanyName { get; set; }
        [Width(200), DisplayName("Customer Name")]
        public String CustomerName { get; set; }
        [Width(150), DisplayName("Province Name")]
        public String ProvinceProvinceName { get; set; }
        [Width(150), DisplayName("City Name")]
        public String CityCityName { get; set; }
        [Width(400)]
        public String Address { get; set; }
        [Width(100), DisplayName("Post Code")]
        public Int32 PostCode { get; set; }
        [Width(200)]
        public String Phone { get; set; }
        [Width(200)]
        public String ContactPerson { get; set; }
        [Width(200)]
        public String Email { get; set; }
    }
}