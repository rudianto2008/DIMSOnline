
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.OrderDetail")]
    [BasedOnRow(typeof(Entities.OrderDetailRow), CheckNames = true)]
    public class OrderDetailForm
    {
        public Int32 OrderId { get; set; }
        public Int32 ProductId { get; set; }
        public Int16 OrderQty { get; set; }
        public Int32 Stock { get; set; }
        public Int32 ProductBasePriceId { get; set; }
        public String ProductBasePriceNumber { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public Decimal BasePrice { get; set; }
        public Decimal ActualPrice { get; set; }
        public Decimal GrossAmount { get; set; }
        public Int16 DiscountPercent { get; set; }
        public Decimal Discount { get; set; }
        public Decimal Total { get; set; }
        public Decimal Ppn { get; set; }
        public Int32 KmInUse { get; set; }
        public Int16 ServiceQuantity { get; set; }
        public String SerialNumber { get; set; }
        public String ManufactureYear { get; set; }
        public String WarrantyNumber { get; set; }
        public Int32 ServiceUnitId { get; set; }
        public Boolean AsAlternativeItem { get; set; }
        public Int32 ParentItemId { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
        public DateTime CancellationDate { get; set; }
        public Int32 CancellationBy { get; set; }
    }
}