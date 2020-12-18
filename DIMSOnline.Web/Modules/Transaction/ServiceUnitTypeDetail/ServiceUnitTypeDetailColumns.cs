
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.ServiceUnitTypeDetail")]
    [BasedOnRow(typeof(Entities.ServiceUnitTypeDetailRow), CheckNames = true)]
    public class ServiceUnitTypeDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ServiceUnitTypeDetailId { get; set; }
        public Int32 ServiceUnitId { get; set; }
        public Int32 CategoryUnitId { get; set; }
        [EditLink]
        public String JobCodeNo { get; set; }
        public String Description { get; set; }
        public Decimal StandartOpTime { get; set; }
        public Decimal ChargePerHour { get; set; }
        public Int32 ServiceHour { get; set; }
        public Decimal TotalCharge { get; set; }
        public String ServiceUnitTypeJobCodeNo { get; set; }
    }
}