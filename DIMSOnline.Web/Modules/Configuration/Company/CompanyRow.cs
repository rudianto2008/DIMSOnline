
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[Company]")]
    [DisplayName("Company"), InstanceName("Company")]
    [ReadPermission(Configuration.PermissionKeys.Configuration)]
    [ModifyPermission(Configuration.PermissionKeys.Configuration)]
    public sealed class CompanyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Id"), Column("CompanyID"), Identity]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Company Name"), Size(50), QuickSearch]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Address"), Size(100)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Fax"), Size(50)]
        public String Fax
        {
            get { return Fields.Fax[this]; }
            set { Fields.Fax[this] = value; }
        }

        [DisplayName("Logo"), Size(100)]
        public String Logo
        {
            get { return Fields.Logo[this]; }
            set { Fields.Logo[this] = value; }
        }

        [DisplayName("Phone"), Size(50)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Contact Person"), Size(50)]
        public String ContactPerson
        {
            get { return Fields.ContactPerson[this]; }
            set { Fields.ContactPerson[this] = value; }
        }

        [DisplayName("Island Id")]
        public Int32? IslandId
        {
            get { return Fields.IslandId[this]; }
            set { Fields.IslandId[this] = value; }
        }

        [DisplayName("Province Id")]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("City Id")]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Office Type"), Size(20)]
        public String OfficeType
        {
            get { return Fields.OfficeType[this]; }
            set { Fields.OfficeType[this] = value; }
        }

        [DisplayName("Insert User Id")]
        public Int16? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int16? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Delete User Id")]
        public Int16? DeleteUserId
        {
            get { return Fields.DeleteUserId[this]; }
            set { Fields.DeleteUserId[this] = value; }
        }

        [DisplayName("Delete Date")]
        public DateTime? DeleteDate
        {
            get { return Fields.DeleteDate[this]; }
            set { Fields.DeleteDate[this] = value; }
        }

        [DisplayName("Is Active")]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CompanyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompanyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CompanyId;
            public StringField CompanyName;
            public StringField Address;
            public StringField Fax;
            public StringField Logo;
            public StringField Phone;
            public StringField ContactPerson;
            public Int32Field IslandId;
            public Int32Field ProvinceId;
            public Int32Field CityId;
            public StringField OfficeType;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field DeleteUserId;
            public DateTimeField DeleteDate;
            public Int16Field IsActive;
        }
    }
}
