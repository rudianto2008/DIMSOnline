
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.ServiceUnitDetail")]
    [BasedOnRow(typeof(Entities.ServiceUnitDetailRow), CheckNames = true)]
    public class ServiceUnitDetailForm
    {
        public Int32 ServiceUnitId { get; set; }
        public Int32 ServiceUnitTypeId { get; set; }
        public Decimal ChargePerHour { get; set; }
        public Int32 ServiceHour { get; set; }
        public Decimal ServiceCharge { get; set; }
        public String ServiceBy { get; set; }
        public Int32 KmInUse { get; set; }
        public DateTime ServiceDate { get; set; }
        public Int32 OrderIdService { get; set; }
    }
}