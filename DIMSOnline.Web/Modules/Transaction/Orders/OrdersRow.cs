
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[Orders]")]
    [DisplayName("Orders"), InstanceName("Orders")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class OrdersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Id"), Column("OrderID"), Identity]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Order Number"), Size(50), QuickSearch]
        public String OrderNumber
        {
            get { return Fields.OrderNumber[this]; }
            set { Fields.OrderNumber[this] = value; }
        }

        [DisplayName("Order Date")]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Customer"), Column("CustomerID"), ForeignKey("[dbo].[Customer]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerCustomerNumber")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("User Id"), Column("UserID")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Product Type Id"), Column("ProductTypeID")]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
        }

        [DisplayName("Km In Use")]
        public Int16? KmInUse
        {
            get { return Fields.KmInUse[this]; }
            set { Fields.KmInUse[this] = value; }
        }

        [DisplayName("Payment Service"), Size(19), Scale(4)]
        public Decimal? PaymentService
        {
            get { return Fields.PaymentService[this]; }
            set { Fields.PaymentService[this] = value; }
        }

        [DisplayName("Order Status"), Size(20)]
        public String OrderStatus
        {
            get { return Fields.OrderStatus[this]; }
            set { Fields.OrderStatus[this] = value; }
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

        [DisplayName("Company"), ForeignKey("[dbo].[Company]", "CompanyID"), LeftJoin("jCompany"), TextualField("CompanyCompanyName")]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Customer Customer Number"), Expression("jCustomer.[CustomerNumber]")]
        public String CustomerCustomerNumber
        {
            get { return Fields.CustomerCustomerNumber[this]; }
            set { Fields.CustomerCustomerNumber[this] = value; }
        }

        [DisplayName("Customer Company Id"), Expression("jCustomer.[CompanyID]")]
        public Int32? CustomerCompanyId
        {
            get { return Fields.CustomerCompanyId[this]; }
            set { Fields.CustomerCompanyId[this] = value; }
        }

        [DisplayName("Customer Customer Name"), Expression("jCustomer.[CustomerName]")]
        public String CustomerCustomerName
        {
            get { return Fields.CustomerCustomerName[this]; }
            set { Fields.CustomerCustomerName[this] = value; }
        }

        [DisplayName("Customer Province Id"), Expression("jCustomer.[ProvinceID]")]
        public Int32? CustomerProvinceId
        {
            get { return Fields.CustomerProvinceId[this]; }
            set { Fields.CustomerProvinceId[this] = value; }
        }

        [DisplayName("Customer City Id"), Expression("jCustomer.[CityID]")]
        public Int32? CustomerCityId
        {
            get { return Fields.CustomerCityId[this]; }
            set { Fields.CustomerCityId[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer Pic"), Expression("jCustomer.[PIC]")]
        public String CustomerPic
        {
            get { return Fields.CustomerPic[this]; }
            set { Fields.CustomerPic[this] = value; }
        }

        [DisplayName("Customer Island Id"), Expression("jCustomer.[IslandID]")]
        public Int32? CustomerIslandId
        {
            get { return Fields.CustomerIslandId[this]; }
            set { Fields.CustomerIslandId[this] = value; }
        }

        [DisplayName("Customer Post Code"), Expression("jCustomer.[PostCode]")]
        public Int32? CustomerPostCode
        {
            get { return Fields.CustomerPostCode[this]; }
            set { Fields.CustomerPostCode[this] = value; }
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        [DisplayName("Customer Contact Person"), Expression("jCustomer.[ContactPerson]")]
        public String CustomerContactPerson
        {
            get { return Fields.CustomerContactPerson[this]; }
            set { Fields.CustomerContactPerson[this] = value; }
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public String CustomerFax
        {
            get { return Fields.CustomerFax[this]; }
            set { Fields.CustomerFax[this] = value; }
        }

        [DisplayName("Customer Birth Place"), Expression("jCustomer.[BirthPlace]")]
        public String CustomerBirthPlace
        {
            get { return Fields.CustomerBirthPlace[this]; }
            set { Fields.CustomerBirthPlace[this] = value; }
        }

        [DisplayName("Customer Birth Date"), Expression("jCustomer.[BirthDate]")]
        public DateTime? CustomerBirthDate
        {
            get { return Fields.CustomerBirthDate[this]; }
            set { Fields.CustomerBirthDate[this] = value; }
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get { return Fields.CustomerEmail[this]; }
            set { Fields.CustomerEmail[this] = value; }
        }

        [DisplayName("Customer Npwp"), Expression("jCustomer.[NPWP]")]
        public String CustomerNpwp
        {
            get { return Fields.CustomerNpwp[this]; }
            set { Fields.CustomerNpwp[this] = value; }
        }

        [DisplayName("Customer Insert User Id"), Expression("jCustomer.[InsertUserId]")]
        public Int16? CustomerInsertUserId
        {
            get { return Fields.CustomerInsertUserId[this]; }
            set { Fields.CustomerInsertUserId[this] = value; }
        }

        [DisplayName("Customer Insert Date"), Expression("jCustomer.[InsertDate]")]
        public DateTime? CustomerInsertDate
        {
            get { return Fields.CustomerInsertDate[this]; }
            set { Fields.CustomerInsertDate[this] = value; }
        }

        [DisplayName("Customer Update User Id"), Expression("jCustomer.[UpdateUserId]")]
        public Int16? CustomerUpdateUserId
        {
            get { return Fields.CustomerUpdateUserId[this]; }
            set { Fields.CustomerUpdateUserId[this] = value; }
        }

        [DisplayName("Customer Update Date"), Expression("jCustomer.[UpdateDate]")]
        public DateTime? CustomerUpdateDate
        {
            get { return Fields.CustomerUpdateDate[this]; }
            set { Fields.CustomerUpdateDate[this] = value; }
        }

        [DisplayName("Customer Is Active"), Expression("jCustomer.[IsActive]")]
        public Int16? CustomerIsActive
        {
            get { return Fields.CustomerIsActive[this]; }
            set { Fields.CustomerIsActive[this] = value; }
        }

        [DisplayName("Customer Delete User Id"), Expression("jCustomer.[DeleteUserId]")]
        public Int16? CustomerDeleteUserId
        {
            get { return Fields.CustomerDeleteUserId[this]; }
            set { Fields.CustomerDeleteUserId[this] = value; }
        }

        [DisplayName("Customer Delete Date"), Expression("jCustomer.[DeleteDate]")]
        public DateTime? CustomerDeleteDate
        {
            get { return Fields.CustomerDeleteDate[this]; }
            set { Fields.CustomerDeleteDate[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrdersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderId;
            public StringField OrderNumber;
            public DateTimeField OrderDate;
            public Int32Field CustomerId;
            public Int32Field UserId;
            public Int32Field ProductTypeId;
            public Int16Field KmInUse;
            public DecimalField PaymentService;
            public StringField OrderStatus;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
            public Int32Field CompanyId;

            public StringField CustomerCustomerNumber;
            public Int32Field CustomerCompanyId;
            public StringField CustomerCustomerName;
            public Int32Field CustomerProvinceId;
            public Int32Field CustomerCityId;
            public StringField CustomerAddress;
            public StringField CustomerPic;
            public Int32Field CustomerIslandId;
            public Int32Field CustomerPostCode;
            public StringField CustomerPhone;
            public StringField CustomerContactPerson;
            public StringField CustomerFax;
            public StringField CustomerBirthPlace;
            public DateTimeField CustomerBirthDate;
            public StringField CustomerEmail;
            public StringField CustomerNpwp;
            public Int16Field CustomerInsertUserId;
            public DateTimeField CustomerInsertDate;
            public Int16Field CustomerUpdateUserId;
            public DateTimeField CustomerUpdateDate;
            public Int16Field CustomerIsActive;
            public Int16Field CustomerDeleteUserId;
            public DateTimeField CustomerDeleteDate;

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
        }
    }
}
