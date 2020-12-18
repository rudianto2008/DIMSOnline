
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.PurchaseOrder")]
    [BasedOnRow(typeof(Entities.PurchaseOrderRow), CheckNames = true)]
    public class PurchaseOrderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PurchaseOrderId { get; set; }
        [EditLink]
        public String PurchaseOrderNumber { get; set; }
        public String CompanyCompanyName { get; set; }
        public DateTime PurchaseOrderDate { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public String ProductTypeProductTypeName { get; set; }
        public String PickupPoint { get; set; }
        public String PurchaseOrderStatus { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}