
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.ServiceUnitTypeDetail")]
    [BasedOnRow(typeof(Entities.ServiceUnitTypeDetailRow), CheckNames = true)]
    public class ServiceUnitTypeDetailForm
    {
        public Int32 ServiceUnitId { get; set; }
        public Int32 CategoryUnitId { get; set; }
        public String JobCodeNo { get; set; }
        public String Description { get; set; }
        public Decimal StandartOpTime { get; set; }
        public Decimal ChargePerHour { get; set; }
        public Int32 ServiceHour { get; set; }
        public Decimal TotalCharge { get; set; }
        public Int32 ServiceUnitTypeId { get; set; }
    }
}