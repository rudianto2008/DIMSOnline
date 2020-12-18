
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.SerialNumberUnit")]
    [BasedOnRow(typeof(Entities.SerialNumberUnitRow), CheckNames = true)]
    public class SerialNumberUnitColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SerialNumberUnitId { get; set; }
        public String ReceiveOrderReceiveOrderNumber { get; set; }
        public Int32 CategoryUnitId { get; set; }
        [EditLink]
        public String SerialNumber { get; set; }
        public String ManufactureYear { get; set; }
        public String WarrantyNumber { get; set; }
        public Boolean Available { get; set; }
    }
}