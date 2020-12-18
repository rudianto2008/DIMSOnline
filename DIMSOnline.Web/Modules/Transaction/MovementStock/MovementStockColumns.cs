
namespace DIMSOnline.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.MovementStock")]
    [BasedOnRow(typeof(Entities.MovementStockRow), CheckNames = true)]
    public class MovementStockColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MovementStockId { get; set; }
        public String MovementTypeMovementTypeName { get; set; }
        public String ProductProductNumber { get; set; }
        public Int32 MovementQty { get; set; }
        [EditLink]
        public String MovementStockNumber { get; set; }
        public String Description { get; set; }
    }
}