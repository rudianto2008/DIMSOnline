
namespace DIMSOnline.Configuration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configuration.Company")]
    [BasedOnRow(typeof(Entities.CompanyRow), CheckNames = true)]
    public class CompanyForm
    {
        [Required]
        public String CompanyName { get; set; }
        [Required, TextAreaEditor(Cols = 3, Rows = 4)]
        public String Address { get; set; }
        [Required, DisplayName("Province")]
        public Int32 ProvinceId { get; set; }
        [Required, DisplayName("City")]
        public Int32 CityId { get; set; }
        [Required, DisplayName("Handphone")]
        public String Phone { get; set; }
        [Required, DisplayName("Contact Name")]
        public String ContactPerson { get; set; }
        [ImageUploadEditor(FilenameFormat = "LogoCompany/~", CopyToHistory = false)]
        public String Logo { get; set; }
       
    }
}