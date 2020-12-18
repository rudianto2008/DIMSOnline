
namespace DIMSOnline.Configuration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configuration.OrderCategory")]
    [BasedOnRow(typeof(Entities.OrderCategoryRow), CheckNames = true)]
    public class OrderCategoryColumns
    {
        [EditLink, Width(200)]
        public String OrderCategoryName { get; set; }
        [Width(400)]
        public String Description { get; set; }
    }
}