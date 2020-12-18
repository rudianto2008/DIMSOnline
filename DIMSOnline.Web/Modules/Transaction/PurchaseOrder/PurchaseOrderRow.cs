
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[PurchaseOrder]")]
    [DisplayName("Purchase Order"), InstanceName("Purchase Order")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class PurchaseOrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Purchase Order Id"), Column("PurchaseOrderID"), Identity]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Purchase Order Number"), Size(50), QuickSearch]
        public String PurchaseOrderNumber
        {
            get { return Fields.PurchaseOrderNumber[this]; }
            set { Fields.PurchaseOrderNumber[this] = value; }
        }

        [DisplayName("Company"), Column("CompanyID"), ForeignKey("[dbo].[Company]", "CompanyID"), LeftJoin("jCompany"), TextualField("CompanyCompanyName")]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Purchase Order Date")]
        public DateTime? PurchaseOrderDate
        {
            get { return Fields.PurchaseOrderDate[this]; }
            set { Fields.PurchaseOrderDate[this] = value; }
        }

        [DisplayName("Order Category Id"), Column("OrderCategoryID")]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Product Type"), Column("ProductTypeID"), ForeignKey("[dbo].[ProductType]", "ProductTypeID"), LeftJoin("jProductType"), TextualField("ProductTypeProductTypeName")]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
        }

        [DisplayName("Pickup Point"), Size(500)]
        public String PickupPoint
        {
            get { return Fields.PickupPoint[this]; }
            set { Fields.PickupPoint[this] = value; }
        }

        [DisplayName("Purchase Order Status"), Size(20)]
        public String PurchaseOrderStatus
        {
            get { return Fields.PurchaseOrderStatus[this]; }
            set { Fields.PurchaseOrderStatus[this] = value; }
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

        [DisplayName("Product Type Product Type Name"), Expression("jProductType.[ProductTypeName]")]
        public String ProductTypeProductTypeName
        {
            get { return Fields.ProductTypeProductTypeName[this]; }
            set { Fields.ProductTypeProductTypeName[this] = value; }
        }

        [DisplayName("Product Type Insert User Id"), Expression("jProductType.[InsertUserId]")]
        public Int16? ProductTypeInsertUserId
        {
            get { return Fields.ProductTypeInsertUserId[this]; }
            set { Fields.ProductTypeInsertUserId[this] = value; }
        }

        [DisplayName("Product Type Insert Date"), Expression("jProductType.[InsertDate]")]
        public DateTime? ProductTypeInsertDate
        {
            get { return Fields.ProductTypeInsertDate[this]; }
            set { Fields.ProductTypeInsertDate[this] = value; }
        }

        [DisplayName("Product Type Update User Id"), Expression("jProductType.[UpdateUserId]")]
        public Int16? ProductTypeUpdateUserId
        {
            get { return Fields.ProductTypeUpdateUserId[this]; }
            set { Fields.ProductTypeUpdateUserId[this] = value; }
        }

        [DisplayName("Product Type Update Date"), Expression("jProductType.[UpdateDate]")]
        public DateTime? ProductTypeUpdateDate
        {
            get { return Fields.ProductTypeUpdateDate[this]; }
            set { Fields.ProductTypeUpdateDate[this] = value; }
        }

        [DisplayName("Product Type Is Active"), Expression("jProductType.[IsActive]")]
        public Int16? ProductTypeIsActive
        {
            get { return Fields.ProductTypeIsActive[this]; }
            set { Fields.ProductTypeIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseOrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PurchaseOrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchaseOrderId;
            public StringField PurchaseOrderNumber;
            public Int32Field CompanyId;
            public DateTimeField PurchaseOrderDate;
            public Int32Field OrderCategoryId;
            public Int32Field ProductTypeId;
            public StringField PickupPoint;
            public StringField PurchaseOrderStatus;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;

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

            public StringField ProductTypeProductTypeName;
            public Int16Field ProductTypeInsertUserId;
            public DateTimeField ProductTypeInsertDate;
            public Int16Field ProductTypeUpdateUserId;
            public DateTimeField ProductTypeUpdateDate;
            public Int16Field ProductTypeIsActive;
        }
    }
}
