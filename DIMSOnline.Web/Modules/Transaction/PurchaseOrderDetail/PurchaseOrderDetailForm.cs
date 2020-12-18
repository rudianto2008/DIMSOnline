
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.PurchaseOrderDetail")]
    [BasedOnRow(typeof(Entities.PurchaseOrderDetailRow), CheckNames = true)]
    public class PurchaseOrderDetailForm
    {
        public Int32 PurchaseOrderId { get; set; }
        public Int32 ProductId { get; set; }
        public Int16 Quantity { get; set; }
        public Int32 ProductPriceId { get; set; }
        public String ProductPriceNumber { get; set; }
        public Decimal Price { get; set; }
        public Decimal GrossAmount { get; set; }
        public Decimal Ppn { get; set; }
        public Decimal Total { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
        public Int32 ReceiveOrderDetailId { get; set; }
        public Int16 ReceiveQty { get; set; }
        public Int16 BackOrderQty { get; set; }
        public DateTime CancellationDate { get; set; }
        public Int32 CancellationBy { get; set; }
        public Decimal DiscountRequest { get; set; }
        public String SupportingDocumentDiscount { get; set; }
        public String ApprovalStatusDiscount { get; set; }
        public String CommentDiscount { get; set; }
    }
}