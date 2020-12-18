
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.ServiceUnit")]
    [BasedOnRow(typeof(Entities.ServiceUnitRow), CheckNames = true)]
    public class ServiceUnitForm
    {
        public String ServiceUnitNumber { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 OrderUnitId { get; set; }
        public Int32 CustomerId { get; set; }
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