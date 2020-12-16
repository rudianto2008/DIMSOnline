
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.Inventory")]
    [BasedOnRow(typeof(Entities.InventoryRow), CheckNames = true)]
    public class InventoryForm
    {
        public Int32 ProductId { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public Int32 Qty { get; set; }
        public String InventoryStatus { get; set; }
        public String DocumentNo { get; set; }
        public Int32 Stock { get; set; }
        public Decimal ProductPrice { get; set; }
        public String ProductPriceNumber { get; set; }
        public Decimal ProductBasePrice { get; set; }
        public String ProductBasePriceNumber { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
        public Int32 CompanyId { get; set; }
    }
}