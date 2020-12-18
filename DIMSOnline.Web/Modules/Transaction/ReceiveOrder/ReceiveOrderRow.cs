
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[ReceiveOrder]")]
    [DisplayName("Receive Order"), InstanceName("Receive Order")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class ReceiveOrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Receive Order Id"), Column("ReceiveOrderID"), Identity]
        public Int32? ReceiveOrderId
        {
            get { return Fields.ReceiveOrderId[this]; }
            set { Fields.ReceiveOrderId[this] = value; }
        }

        [DisplayName("Product Type Id"), Column("ProductTypeID")]
        public Int16? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
        }

        [DisplayName("Receive Order Number"), Size(50), QuickSearch]
        public String ReceiveOrderNumber
        {
            get { return Fields.ReceiveOrderNumber[this]; }
            set { Fields.ReceiveOrderNumber[this] = value; }
        }

        [DisplayName("Purchase Order"), Column("PurchaseOrderID"), ForeignKey("[dbo].[PurchaseOrder]", "PurchaseOrderID"), LeftJoin("jPurchaseOrder"), TextualField("PurchaseOrderPurchaseOrderNumber")]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Receive Date")]
        public DateTime? ReceiveDate
        {
            get { return Fields.ReceiveDate[this]; }
            set { Fields.ReceiveDate[this] = value; }
        }

        [DisplayName("Receive By"), Size(50)]
        public String ReceiveBy
        {
            get { return Fields.ReceiveBy[this]; }
            set { Fields.ReceiveBy[this] = value; }
        }

        [DisplayName("Acknowledge By"), Size(50)]
        public String AcknowledgeBy
        {
            get { return Fields.AcknowledgeBy[this]; }
            set { Fields.AcknowledgeBy[this] = value; }
        }

        [DisplayName("Receive Order Status"), Size(20)]
        public String ReceiveOrderStatus
        {
            get { return Fields.ReceiveOrderStatus[this]; }
            set { Fields.ReceiveOrderStatus[this] = value; }
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

        [DisplayName("Purchase Order Purchase Order Number"), Expression("jPurchaseOrder.[PurchaseOrderNumber]")]
        public String PurchaseOrderPurchaseOrderNumber
        {
            get { return Fields.PurchaseOrderPurchaseOrderNumber[this]; }
            set { Fields.PurchaseOrderPurchaseOrderNumber[this] = value; }
        }

        [DisplayName("Purchase Order Company Id"), Expression("jPurchaseOrder.[CompanyID]")]
        public Int32? PurchaseOrderCompanyId
        {
            get { return Fields.PurchaseOrderCompanyId[this]; }
            set { Fields.PurchaseOrderCompanyId[this] = value; }
        }

        [DisplayName("Purchase Order Purchase Order Date"), Expression("jPurchaseOrder.[PurchaseOrderDate]")]
        public DateTime? PurchaseOrderPurchaseOrderDate
        {
            get { return Fields.PurchaseOrderPurchaseOrderDate[this]; }
            set { Fields.PurchaseOrderPurchaseOrderDate[this] = value; }
        }

        [DisplayName("Purchase Order Order Category Id"), Expression("jPurchaseOrder.[OrderCategoryID]")]
        public Int32? PurchaseOrderOrderCategoryId
        {
            get { return Fields.PurchaseOrderOrderCategoryId[this]; }
            set { Fields.PurchaseOrderOrderCategoryId[this] = value; }
        }

        [DisplayName("Purchase Order Product Type Id"), Expression("jPurchaseOrder.[ProductTypeID]")]
        public Int32? PurchaseOrderProductTypeId
        {
            get { return Fields.PurchaseOrderProductTypeId[this]; }
            set { Fields.PurchaseOrderProductTypeId[this] = value; }
        }

        [DisplayName("Purchase Order Pickup Point"), Expression("jPurchaseOrder.[PickupPoint]")]
        public String PurchaseOrderPickupPoint
        {
            get { return Fields.PurchaseOrderPickupPoint[this]; }
            set { Fields.PurchaseOrderPickupPoint[this] = value; }
        }

        [DisplayName("Purchase Order Purchase Order Status"), Expression("jPurchaseOrder.[PurchaseOrderStatus]")]
        public String PurchaseOrderPurchaseOrderStatus
        {
            get { return Fields.PurchaseOrderPurchaseOrderStatus[this]; }
            set { Fields.PurchaseOrderPurchaseOrderStatus[this] = value; }
        }

        [DisplayName("Purchase Order Insert User Id"), Expression("jPurchaseOrder.[InsertUserId]")]
        public Int16? PurchaseOrderInsertUserId
        {
            get { return Fields.PurchaseOrderInsertUserId[this]; }
            set { Fields.PurchaseOrderInsertUserId[this] = value; }
        }

        [DisplayName("Purchase Order Insert Date"), Expression("jPurchaseOrder.[InsertDate]")]
        public DateTime? PurchaseOrderInsertDate
        {
            get { return Fields.PurchaseOrderInsertDate[this]; }
            set { Fields.PurchaseOrderInsertDate[this] = value; }
        }

        [DisplayName("Purchase Order Update User Id"), Expression("jPurchaseOrder.[UpdateUserId]")]
        public Int16? PurchaseOrderUpdateUserId
        {
            get { return Fields.PurchaseOrderUpdateUserId[this]; }
            set { Fields.PurchaseOrderUpdateUserId[this] = value; }
        }

        [DisplayName("Purchase Order Update Date"), Expression("jPurchaseOrder.[UpdateDate]")]
        public DateTime? PurchaseOrderUpdateDate
        {
            get { return Fields.PurchaseOrderUpdateDate[this]; }
            set { Fields.PurchaseOrderUpdateDate[this] = value; }
        }

        [DisplayName("Purchase Order Is Active"), Expression("jPurchaseOrder.[IsActive]")]
        public Int16? PurchaseOrderIsActive
        {
            get { return Fields.PurchaseOrderIsActive[this]; }
            set { Fields.PurchaseOrderIsActive[this] = value; }
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
            get { return Fields.ReceiveOrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ReceiveOrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReceiveOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReceiveOrderId;
            public Int16Field ProductTypeId;
            public StringField ReceiveOrderNumber;
            public Int32Field PurchaseOrderId;
            public DateTimeField ReceiveDate;
            public StringField ReceiveBy;
            public StringField AcknowledgeBy;
            public StringField ReceiveOrderStatus;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
            public Int32Field CompanyId;

            public StringField PurchaseOrderPurchaseOrderNumber;
            public Int32Field PurchaseOrderCompanyId;
            public DateTimeField PurchaseOrderPurchaseOrderDate;
            public Int32Field PurchaseOrderOrderCategoryId;
            public Int32Field PurchaseOrderProductTypeId;
            public StringField PurchaseOrderPickupPoint;
            public StringField PurchaseOrderPurchaseOrderStatus;
            public Int16Field PurchaseOrderInsertUserId;
            public DateTimeField PurchaseOrderInsertDate;
            public Int16Field PurchaseOrderUpdateUserId;
            public DateTimeField PurchaseOrderUpdateDate;
            public Int16Field PurchaseOrderIsActive;

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
