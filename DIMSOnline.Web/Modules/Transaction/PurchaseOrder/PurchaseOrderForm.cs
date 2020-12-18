
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.PurchaseOrder")]
    [BasedOnRow(typeof(Entities.PurchaseOrderRow), CheckNames = true)]
    public class PurchaseOrderForm
    {
        public String PurchaseOrderNumber { get; set; }
        public Int32 CompanyId { get; set; }
        public DateTime PurchaseOrderDate { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public Int32 ProductTypeId { get; set; }
        public String PickupPoint { get; set; }
        public String PurchaseOrderStatus { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}