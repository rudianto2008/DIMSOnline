
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow), CheckNames = true)]
    public class OrdersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OrderId { get; set; }
        [EditLink]
        public String OrderNumber { get; set; }
        public DateTime OrderDate { get; set; }
        public String CustomerCustomerNumber { get; set; }
        public Int32 UserId { get; set; }
        public Int32 ProductTypeId { get; set; }
        public Int16 KmInUse { get; set; }
        public Decimal PaymentService { get; set; }
        public String OrderStatus { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
        public String CompanyCompanyName { get; set; }
    }
}