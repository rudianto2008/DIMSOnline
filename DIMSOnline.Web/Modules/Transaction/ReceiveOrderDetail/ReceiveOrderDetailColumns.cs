
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.ReceiveOrderDetail")]
    [BasedOnRow(typeof(Entities.ReceiveOrderDetailRow), CheckNames = true)]
    public class ReceiveOrderDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ReceiveOrderDetailId { get; set; }
        public String ReceiveOrderReceiveOrderNumber { get; set; }
        public String ProductProductNumber { get; set; }
        public Int16 PoQty { get; set; }
        public Int16 ReceiveQty { get; set; }
        public Int16 BackOrderQty { get; set; }
        public Decimal Price { get; set; }
        public Boolean ReceiveComplete { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}