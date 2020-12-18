
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.ServiceUnitType")]
    [BasedOnRow(typeof(Entities.ServiceUnitTypeRow), CheckNames = true)]
    public class ServiceUnitTypeForm
    {
        public Int32 CategoryUnitId { get; set; }
        public Int32 ProductId { get; set; }
        public String JobCodeNo { get; set; }
        public String Description { get; set; }
        public Decimal ChargePerHour { get; set; }
        public String ServiceUnitType { get; set; }
        public Decimal StandartOpTime { get; set; }
        public Boolean Continued { get; set; }
    }
}