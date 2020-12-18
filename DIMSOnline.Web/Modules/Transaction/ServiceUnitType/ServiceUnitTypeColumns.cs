
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.ServiceUnitType")]
    [BasedOnRow(typeof(Entities.ServiceUnitTypeRow), CheckNames = true)]
    public class ServiceUnitTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ServiceUnitTypeId { get; set; }
        public String CategoryUnitCategoryUnitName { get; set; }
        public Int32 ProductId { get; set; }
        public String JobCodeNo { get; set; }
        public String Description { get; set; }
        public Decimal ChargePerHour { get; set; }
        [EditLink]
        public String ServiceUnitType { get; set; }
        public Decimal StandartOpTime { get; set; }
        public Boolean Continued { get; set; }
    }
}