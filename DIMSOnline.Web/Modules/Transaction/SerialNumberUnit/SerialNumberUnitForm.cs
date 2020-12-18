
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.SerialNumberUnit")]
    [BasedOnRow(typeof(Entities.SerialNumberUnitRow), CheckNames = true)]
    public class SerialNumberUnitForm
    {
        public Int32 ReceiveOrderId { get; set; }
        public Int32 CategoryUnitId { get; set; }
        public String SerialNumber { get; set; }
        public String ManufactureYear { get; set; }
        public String WarrantyNumber { get; set; }
        public Boolean Available { get; set; }
    }
}