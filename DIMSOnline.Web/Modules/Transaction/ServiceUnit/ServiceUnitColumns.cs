
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.ServiceUnit")]
    [BasedOnRow(typeof(Entities.ServiceUnitRow), CheckNames = true)]
    public class ServiceUnitColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ServiceUnitId { get; set; }
        [EditLink]
        public String ServiceUnitNumber { get; set; }
        public String ProductProductNumber { get; set; }
        public String OrderUnitOrderNumber { get; set; }
        public String CustomerCustomerNumber { get; set; }
        public DateTime ServiceDate { get; set; }
        public String ServiceBy { get; set; }
        public String SerialNumber { get; set; }
        public String ManufactureYear { get; set; }
        public String WarrantyNumber { get; set; }
        public String Remark { get; set; }
        public String ServiceUnitStatus { get; set; }
        public String Hm { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}