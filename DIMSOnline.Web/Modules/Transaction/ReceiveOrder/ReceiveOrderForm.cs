
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.ReceiveOrder")]
    [BasedOnRow(typeof(Entities.ReceiveOrderRow), CheckNames = true)]
    public class ReceiveOrderForm
    {
        public Int16 ProductTypeId { get; set; }
        public String ReceiveOrderNumber { get; set; }
        public Int32 PurchaseOrderId { get; set; }
        public DateTime ReceiveDate { get; set; }
        public String ReceiveBy { get; set; }
        public String AcknowledgeBy { get; set; }
        public String ReceiveOrderStatus { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
        public Int32 CompanyId { get; set; }
    }
}