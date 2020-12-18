
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.ServiceUnitDetail")]
    [BasedOnRow(typeof(Entities.ServiceUnitDetailRow), CheckNames = true)]
    public class ServiceUnitDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ServiceUnitDetailId { get; set; }
        public String ServiceUnitServiceUnitNumber { get; set; }
        public String ServiceUnitTypeJobCodeNo { get; set; }
        public Decimal ChargePerHour { get; set; }
        public Int32 ServiceHour { get; set; }
        public Decimal ServiceCharge { get; set; }
        [EditLink]
        public String ServiceBy { get; set; }
        public Int32 KmInUse { get; set; }
        public DateTime ServiceDate { get; set; }
        public Int32 OrderIdService { get; set; }
    }
}