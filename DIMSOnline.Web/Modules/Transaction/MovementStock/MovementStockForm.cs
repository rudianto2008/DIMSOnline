
namespace DIMSOnline.Transaction.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transaction.MovementStock")]
    [BasedOnRow(typeof(Entities.MovementStockRow), CheckNames = true)]
    public class MovementStockForm
    {
        public Int32 MovementTypeId { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 MovementQty { get; set; }
        public String MovementStockNumber { get; set; }
        public String Description { get; set; }
        public Int16 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int16 UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int16 IsActive { get; set; }
    }
}