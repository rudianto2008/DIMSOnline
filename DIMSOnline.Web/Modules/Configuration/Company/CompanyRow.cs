
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

        [DisplayName("Island"), ForeignKey("[dbo].[Island]", "IslandID"), LeftJoin("jIsland"), TextualField("IslandIslandCode")]
        public Int32? IslandId
        {
            get { return Fields.IslandId[this]; }
            set { Fields.IslandId[this] = value; }
        }

        [DisplayName("Province"), ForeignKey("[dbo].[Province]", "ProvinceID"), LeftJoin("jProvince"), TextualField("ProvinceProvinceCode")]
        [LookupEditor("LookupProvince"), LookupInclude]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("City"), ForeignKey("[dbo].[City]", "CityID"), LeftJoin("jCity"), TextualField("CityCityCode")]
        [LookupEditor("LookupCity", CascadeFrom = "ProvinceId", CascadeValue = "ProvinceId"), LookupInclude]
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

        [DisplayName("Island Island Code"), Expression("jIsland.[IslandCode]")]
        public String IslandIslandCode
        {
            get { return Fields.IslandIslandCode[this]; }
            set { Fields.IslandIslandCode[this] = value; }
        }

        [DisplayName("Island Island Name"), Expression("jIsland.[IslandName]")]
        public String IslandIslandName
        {
            get { return Fields.IslandIslandName[this]; }
            set { Fields.IslandIslandName[this] = value; }
        }

        [DisplayName("Island Insert User Id"), Expression("jIsland.[InsertUserId]")]
        public Int16? IslandInsertUserId
        {
            get { return Fields.IslandInsertUserId[this]; }
            set { Fields.IslandInsertUserId[this] = value; }
        }

        [DisplayName("Island Insert Date"), Expression("jIsland.[InsertDate]")]
        public DateTime? IslandInsertDate
        {
            get { return Fields.IslandInsertDate[this]; }
            set { Fields.IslandInsertDate[this] = value; }
        }

        [DisplayName("Island Update User Id"), Expression("jIsland.[UpdateUserId]")]
        public Int16? IslandUpdateUserId
        {
            get { return Fields.IslandUpdateUserId[this]; }
            set { Fields.IslandUpdateUserId[this] = value; }
        }

        [DisplayName("Island Update Date"), Expression("jIsland.[UpdateDate]")]
        public DateTime? IslandUpdateDate
        {
            get { return Fields.IslandUpdateDate[this]; }
            set { Fields.IslandUpdateDate[this] = value; }
        }

        [DisplayName("Island Is Active"), Expression("jIsland.[IsActive]")]
        public Int16? IslandIsActive
        {
            get { return Fields.IslandIsActive[this]; }
            set { Fields.IslandIsActive[this] = value; }
        }

        [DisplayName("Province Province Code"), Expression("jProvince.[ProvinceCode]")]
        public String ProvinceProvinceCode
        {
            get { return Fields.ProvinceProvinceCode[this]; }
            set { Fields.ProvinceProvinceCode[this] = value; }
        }

        [DisplayName("Province Island Id"), Expression("jProvince.[IslandID]")]
        public Int32? ProvinceIslandId
        {
            get { return Fields.ProvinceIslandId[this]; }
            set { Fields.ProvinceIslandId[this] = value; }
        }

        [DisplayName("Province Name"), Expression("jProvince.[ProvinceName]")]
        public String ProvinceProvinceName
        {
            get { return Fields.ProvinceProvinceName[this]; }
            set { Fields.ProvinceProvinceName[this] = value; }
        }

        [DisplayName("Province Insert User Id"), Expression("jProvince.[InsertUserId]")]
        public Int16? ProvinceInsertUserId
        {
            get { return Fields.ProvinceInsertUserId[this]; }
            set { Fields.ProvinceInsertUserId[this] = value; }
        }

        [DisplayName("Province Insert Date"), Expression("jProvince.[InsertDate]")]
        public DateTime? ProvinceInsertDate
        {
            get { return Fields.ProvinceInsertDate[this]; }
            set { Fields.ProvinceInsertDate[this] = value; }
        }

        [DisplayName("Province Update User Id"), Expression("jProvince.[UpdateUserId]")]
        public Int16? ProvinceUpdateUserId
        {
            get { return Fields.ProvinceUpdateUserId[this]; }
            set { Fields.ProvinceUpdateUserId[this] = value; }
        }

        [DisplayName("Province Update Date"), Expression("jProvince.[UpdateDate]")]
        public DateTime? ProvinceUpdateDate
        {
            get { return Fields.ProvinceUpdateDate[this]; }
            set { Fields.ProvinceUpdateDate[this] = value; }
        }

        [DisplayName("Province Is Active"), Expression("jProvince.[IsActive]")]
        public Int16? ProvinceIsActive
        {
            get { return Fields.ProvinceIsActive[this]; }
            set { Fields.ProvinceIsActive[this] = value; }
        }

        [DisplayName("City City Code"), Expression("jCity.[CityCode]")]
        public String CityCityCode
        {
            get { return Fields.CityCityCode[this]; }
            set { Fields.CityCityCode[this] = value; }
        }

        [DisplayName("City Province Id"), Expression("jCity.[ProvinceID]")]
        public Int32? CityProvinceId
        {
            get { return Fields.CityProvinceId[this]; }
            set { Fields.CityProvinceId[this] = value; }
        }

        [DisplayName("City Island Id"), Expression("jCity.[IslandID]")]
        public Int32? CityIslandId
        {
            get { return Fields.CityIslandId[this]; }
            set { Fields.CityIslandId[this] = value; }
        }

        [DisplayName("City Name"), Expression("jCity.[CityName]")]
        public String CityCityName
        {
            get { return Fields.CityCityName[this]; }
            set { Fields.CityCityName[this] = value; }
        }

        [DisplayName("City Insert User Id"), Expression("jCity.[InsertUserId]")]
        public Int16? CityInsertUserId
        {
            get { return Fields.CityInsertUserId[this]; }
            set { Fields.CityInsertUserId[this] = value; }
        }

        [DisplayName("City Insert Date"), Expression("jCity.[InsertDate]")]
        public DateTime? CityInsertDate
        {
            get { return Fields.CityInsertDate[this]; }
            set { Fields.CityInsertDate[this] = value; }
        }

        [DisplayName("City Update User Id"), Expression("jCity.[UpdateUserId]")]
        public Int16? CityUpdateUserId
        {
            get { return Fields.CityUpdateUserId[this]; }
            set { Fields.CityUpdateUserId[this] = value; }
        }

        [DisplayName("City Update Date"), Expression("jCity.[UpdateDate]")]
        public DateTime? CityUpdateDate
        {
            get { return Fields.CityUpdateDate[this]; }
            set { Fields.CityUpdateDate[this] = value; }
        }

        [DisplayName("City Is Active"), Expression("jCity.[IsActive]")]
        public Int16? CityIsActive
        {
            get { return Fields.CityIsActive[this]; }
            set { Fields.CityIsActive[this] = value; }
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

            public StringField IslandIslandCode;
            public StringField IslandIslandName;
            public Int16Field IslandInsertUserId;
            public DateTimeField IslandInsertDate;
            public Int16Field IslandUpdateUserId;
            public DateTimeField IslandUpdateDate;
            public Int16Field IslandIsActive;

            public StringField ProvinceProvinceCode;
            public Int32Field ProvinceIslandId;
            public StringField ProvinceProvinceName;
            public Int16Field ProvinceInsertUserId;
            public DateTimeField ProvinceInsertDate;
            public Int16Field ProvinceUpdateUserId;
            public DateTimeField ProvinceUpdateDate;
            public Int16Field ProvinceIsActive;

            public StringField CityCityCode;
            public Int32Field CityProvinceId;
            public Int32Field CityIslandId;
            public StringField CityCityName;
            public Int16Field CityInsertUserId;
            public DateTimeField CityInsertDate;
            public Int16Field CityUpdateUserId;
            public DateTimeField CityUpdateDate;
            public Int16Field CityIsActive;
        }
    }
}
