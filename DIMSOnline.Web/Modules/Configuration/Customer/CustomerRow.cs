
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[Customer]")]
    [DisplayName("Customer"), InstanceName("Customer")]
    [ReadPermission(PermissionKeys.Configuration)]
    [ModifyPermission(PermissionKeys.Configuration)]
    public sealed class CustomerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Id"), Column("CustomerID"), Identity]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Customer Number"), Size(20), QuickSearch]
        public String CustomerNumber
        {
            get { return Fields.CustomerNumber[this]; }
            set { Fields.CustomerNumber[this] = value; }
        }

        [DisplayName("Company"), Column("CompanyID"), ForeignKey("[dbo].[Company]", "CompanyID"), LeftJoin("jCompany"), TextualField("CompanyCompanyName")]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Customer Name"), Size(50), NotNull]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Province"), Column("ProvinceID"), NotNull, ForeignKey("[dbo].[Province]", "ProvinceID"), LeftJoin("jProvince"), TextualField("ProvinceProvinceCode")]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("City"), Column("CityID"), NotNull, ForeignKey("[dbo].[City]", "CityID"), LeftJoin("jCity"), TextualField("CityCityCode")]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Address"), Size(200)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Pic"), Column("PIC"), Size(200)]
        public String Pic
        {
            get { return Fields.Pic[this]; }
            set { Fields.Pic[this] = value; }
        }

        [DisplayName("Island"), Column("IslandID"), ForeignKey("[dbo].[Island]", "IslandID"), LeftJoin("jIsland"), TextualField("IslandIslandCode")]
        public Int32? IslandId
        {
            get { return Fields.IslandId[this]; }
            set { Fields.IslandId[this] = value; }
        }

        [DisplayName("Post Code")]
        public Int32? PostCode
        {
            get { return Fields.PostCode[this]; }
            set { Fields.PostCode[this] = value; }
        }

        [DisplayName("Phone"), Size(20)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Contact Person"), Size(20)]
        public String ContactPerson
        {
            get { return Fields.ContactPerson[this]; }
            set { Fields.ContactPerson[this] = value; }
        }

        [DisplayName("Fax"), Size(20)]
        public String Fax
        {
            get { return Fields.Fax[this]; }
            set { Fields.Fax[this] = value; }
        }

        [DisplayName("Birth Place"), Size(100)]
        public String BirthPlace
        {
            get { return Fields.BirthPlace[this]; }
            set { Fields.BirthPlace[this] = value; }
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get { return Fields.BirthDate[this]; }
            set { Fields.BirthDate[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Npwp"), Column("NPWP"), Size(50)]
        public String Npwp
        {
            get { return Fields.Npwp[this]; }
            set { Fields.Npwp[this] = value; }
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

        [DisplayName("Is Active")]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
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

        [DisplayName("Company Company Name"), Expression("jCompany.[CompanyName]")]
        public String CompanyCompanyName
        {
            get { return Fields.CompanyCompanyName[this]; }
            set { Fields.CompanyCompanyName[this] = value; }
        }

        [DisplayName("Company Address"), Expression("jCompany.[Address]")]
        public String CompanyAddress
        {
            get { return Fields.CompanyAddress[this]; }
            set { Fields.CompanyAddress[this] = value; }
        }

        [DisplayName("Company Fax"), Expression("jCompany.[Fax]")]
        public String CompanyFax
        {
            get { return Fields.CompanyFax[this]; }
            set { Fields.CompanyFax[this] = value; }
        }

        [DisplayName("Company Logo"), Expression("jCompany.[Logo]")]
        public String CompanyLogo
        {
            get { return Fields.CompanyLogo[this]; }
            set { Fields.CompanyLogo[this] = value; }
        }

        [DisplayName("Company Phone"), Expression("jCompany.[Phone]")]
        public String CompanyPhone
        {
            get { return Fields.CompanyPhone[this]; }
            set { Fields.CompanyPhone[this] = value; }
        }

        [DisplayName("Company Contact Person"), Expression("jCompany.[ContactPerson]")]
        public String CompanyContactPerson
        {
            get { return Fields.CompanyContactPerson[this]; }
            set { Fields.CompanyContactPerson[this] = value; }
        }

        [DisplayName("Company Island Id"), Expression("jCompany.[IslandId]")]
        public Int32? CompanyIslandId
        {
            get { return Fields.CompanyIslandId[this]; }
            set { Fields.CompanyIslandId[this] = value; }
        }

        [DisplayName("Company Province Id"), Expression("jCompany.[ProvinceId]")]
        public Int32? CompanyProvinceId
        {
            get { return Fields.CompanyProvinceId[this]; }
            set { Fields.CompanyProvinceId[this] = value; }
        }

        [DisplayName("Company City Id"), Expression("jCompany.[CityId]")]
        public Int32? CompanyCityId
        {
            get { return Fields.CompanyCityId[this]; }
            set { Fields.CompanyCityId[this] = value; }
        }

        [DisplayName("Company Office Type"), Expression("jCompany.[OfficeType]")]
        public String CompanyOfficeType
        {
            get { return Fields.CompanyOfficeType[this]; }
            set { Fields.CompanyOfficeType[this] = value; }
        }

        [DisplayName("Company Insert User Id"), Expression("jCompany.[InsertUserId]")]
        public Int16? CompanyInsertUserId
        {
            get { return Fields.CompanyInsertUserId[this]; }
            set { Fields.CompanyInsertUserId[this] = value; }
        }

        [DisplayName("Company Insert Date"), Expression("jCompany.[InsertDate]")]
        public DateTime? CompanyInsertDate
        {
            get { return Fields.CompanyInsertDate[this]; }
            set { Fields.CompanyInsertDate[this] = value; }
        }

        [DisplayName("Company Update User Id"), Expression("jCompany.[UpdateUserId]")]
        public Int16? CompanyUpdateUserId
        {
            get { return Fields.CompanyUpdateUserId[this]; }
            set { Fields.CompanyUpdateUserId[this] = value; }
        }

        [DisplayName("Company Update Date"), Expression("jCompany.[UpdateDate]")]
        public DateTime? CompanyUpdateDate
        {
            get { return Fields.CompanyUpdateDate[this]; }
            set { Fields.CompanyUpdateDate[this] = value; }
        }

        [DisplayName("Company Delete User Id"), Expression("jCompany.[DeleteUserId]")]
        public Int16? CompanyDeleteUserId
        {
            get { return Fields.CompanyDeleteUserId[this]; }
            set { Fields.CompanyDeleteUserId[this] = value; }
        }

        [DisplayName("Company Delete Date"), Expression("jCompany.[DeleteDate]")]
        public DateTime? CompanyDeleteDate
        {
            get { return Fields.CompanyDeleteDate[this]; }
            set { Fields.CompanyDeleteDate[this] = value; }
        }

        [DisplayName("Company Is Active"), Expression("jCompany.[IsActive]")]
        public Int16? CompanyIsActive
        {
            get { return Fields.CompanyIsActive[this]; }
            set { Fields.CompanyIsActive[this] = value; }
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

        [DisplayName("Province Province Name"), Expression("jProvince.[ProvinceName]")]
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

        [DisplayName("City City Name"), Expression("jCity.[CityName]")]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public StringField CustomerNumber;
            public Int32Field CompanyId;
            public StringField CustomerName;
            public Int32Field ProvinceId;
            public Int32Field CityId;
            public StringField Address;
            public StringField Pic;
            public Int32Field IslandId;
            public Int32Field PostCode;
            public StringField Phone;
            public StringField ContactPerson;
            public StringField Fax;
            public StringField BirthPlace;
            public DateTimeField BirthDate;
            public StringField Email;
            public StringField Npwp;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
            public Int16Field DeleteUserId;
            public DateTimeField DeleteDate;

            public StringField CompanyCompanyName;
            public StringField CompanyAddress;
            public StringField CompanyFax;
            public StringField CompanyLogo;
            public StringField CompanyPhone;
            public StringField CompanyContactPerson;
            public Int32Field CompanyIslandId;
            public Int32Field CompanyProvinceId;
            public Int32Field CompanyCityId;
            public StringField CompanyOfficeType;
            public Int16Field CompanyInsertUserId;
            public DateTimeField CompanyInsertDate;
            public Int16Field CompanyUpdateUserId;
            public DateTimeField CompanyUpdateDate;
            public Int16Field CompanyDeleteUserId;
            public DateTimeField CompanyDeleteDate;
            public Int16Field CompanyIsActive;

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

            public StringField IslandIslandCode;
            public StringField IslandIslandName;
            public Int16Field IslandInsertUserId;
            public DateTimeField IslandInsertDate;
            public Int16Field IslandUpdateUserId;
            public DateTimeField IslandUpdateDate;
            public Int16Field IslandIsActive;
        }
    }
}
