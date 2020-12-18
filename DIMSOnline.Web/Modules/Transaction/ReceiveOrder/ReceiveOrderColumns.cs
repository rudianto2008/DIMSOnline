
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.ReceiveOrder")]
    [BasedOnRow(typeof(Entities.ReceiveOrderRow), CheckNames = true)]
    public class ReceiveOrderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ReceiveOrderId { get; set; }
        public Int16 ProductTypeId { get; set; }
        [EditLink]
        public String ReceiveOrderNumber { get; set; }
        public String PurchaseOrderPurchaseOrderNumber { get; set; }
        public DateTime ReceiveDate { get; set; }
        public String ReceiveBy { get; set; }
        public String AcknowledgeBy { get; set; }
        public String ReceiveOrderStatus { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
        public String CompanyCompanyName { get; set; }
    }
}