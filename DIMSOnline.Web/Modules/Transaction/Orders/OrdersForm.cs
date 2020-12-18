
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow), CheckNames = true)]
    public class OrdersForm
    {
        public String OrderNumber { get; set; }
        public DateTime OrderDate { get; set; }
        public Int32 CustomerId { get; set; }
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
        public Int32 CompanyId { get; set; }
    }
}