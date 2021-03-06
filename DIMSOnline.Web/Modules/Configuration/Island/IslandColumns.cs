﻿
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.Island")]
    [BasedOnRow(typeof(Entities.IslandRow), CheckNames = true)]
    public class IslandColumns
    {
        [EditLink]
        public String IslandCode { get; set; }
        public String IslandName { get; set; }
    }
}