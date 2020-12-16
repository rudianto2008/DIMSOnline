
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.MovementType")]
    [BasedOnRow(typeof(Entities.MovementTypeRow), CheckNames = true)]
    public class MovementTypeForm
    {
        public String MovementTypeName { get; set; }
        public String StatusInOut { get; set; }
    }
}