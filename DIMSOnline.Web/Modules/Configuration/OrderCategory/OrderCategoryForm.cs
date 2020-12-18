
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.OrderCategory")]
    [BasedOnRow(typeof(Entities.OrderCategoryRow), CheckNames = true)]
    public class OrderCategoryForm
    {
        [Required]
        public String OrderCategoryName { get; set; }
        [Required]
        public String Description { get; set; }
    }
}