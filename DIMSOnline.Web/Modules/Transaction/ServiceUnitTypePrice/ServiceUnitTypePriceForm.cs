
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.ServiceUnitTypePrice")]
    [BasedOnRow(typeof(Entities.ServiceUnitTypePriceRow), CheckNames = true)]
    public class ServiceUnitTypePriceForm
    {
        public Int32 CategoryUnitId { get; set; }
        public Decimal PricePerHour { get; set; }
    }
}