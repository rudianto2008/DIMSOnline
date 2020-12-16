
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.MovementType")]
    [BasedOnRow(typeof(Entities.MovementTypeRow), CheckNames = true)]
    public class MovementTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MovementTypeId { get; set; }
        [EditLink]
        public String MovementTypeName { get; set; }
        public String StatusInOut { get; set; }
    }
}