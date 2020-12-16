
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CustomerId { get; set; }
        [EditLink]
        public String CustomerNumber { get; set; }
        public String CompanyCompanyName { get; set; }
        public String CustomerName { get; set; }
        public String ProvinceProvinceCode { get; set; }
        public String CityCityCode { get; set; }
        public String Address { get; set; }
        public String Pic { get; set; }
        public String IslandIslandCode { get; set; }
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