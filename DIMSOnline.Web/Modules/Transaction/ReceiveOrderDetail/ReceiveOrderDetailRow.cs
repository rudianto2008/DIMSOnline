
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[ReceiveOrderDetail]")]
    [DisplayName("Receive Order Detail"), InstanceName("Receive Order Detail")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class ReceiveOrderDetailRow : Row, IIdRow
    {
        [DisplayName("Receive Order Detail Id"), Column("ReceiveOrderDetailID"), Identity]
        public Int32? ReceiveOrderDetailId
        {
            get { return Fields.ReceiveOrderDetailId[this]; }
            set { Fields.ReceiveOrderDetailId[this] = value; }
        }

        [DisplayName("Receive Order"), Column("ReceiveOrderID"), ForeignKey("[dbo].[ReceiveOrder]", "ReceiveOrderID"), LeftJoin("jReceiveOrder"), TextualField("ReceiveOrderReceiveOrderNumber")]
        public Int32? ReceiveOrderId
        {
            get { return Fields.ReceiveOrderId[this]; }
            set { Fields.ReceiveOrderId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductNumber")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Po Qty"), Column("POQty")]
        public Int16? PoQty
        {
            get { return Fields.PoQty[this]; }
            set { Fields.PoQty[this] = value; }
        }

        [DisplayName("Receive Qty")]
        public Int16? ReceiveQty
        {
            get { return Fields.ReceiveQty[this]; }
            set { Fields.ReceiveQty[this] = value; }
        }

        [DisplayName("Back Order Qty")]
        public Int16? BackOrderQty
        {
            get { return Fields.BackOrderQty[this]; }
            set { Fields.BackOrderQty[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(4)]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Receive Complete")]
        public Boolean? ReceiveComplete
        {
            get { return Fields.ReceiveComplete[this]; }
            set { Fields.ReceiveComplete[this] = value; }
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

        [DisplayName("Receive Order Product Type Id"), Expression("jReceiveOrder.[ProductTypeID]")]
        public Int16? ReceiveOrderProductTypeId
        {
            get { return Fields.ReceiveOrderProductTypeId[this]; }
            set { Fields.ReceiveOrderProductTypeId[this] = value; }
        }

        [DisplayName("Receive Order Receive Order Number"), Expression("jReceiveOrder.[ReceiveOrderNumber]")]
        public String ReceiveOrderReceiveOrderNumber
        {
            get { return Fields.ReceiveOrderReceiveOrderNumber[this]; }
            set { Fields.ReceiveOrderReceiveOrderNumber[this] = value; }
        }

        [DisplayName("Receive Order Purchase Order Id"), Expression("jReceiveOrder.[PurchaseOrderID]")]
        public Int32? ReceiveOrderPurchaseOrderId
        {
            get { return Fields.ReceiveOrderPurchaseOrderId[this]; }
            set { Fields.ReceiveOrderPurchaseOrderId[this] = value; }
        }

        [DisplayName("Receive Order Receive Date"), Expression("jReceiveOrder.[ReceiveDate]")]
        public DateTime? ReceiveOrderReceiveDate
        {
            get { return Fields.ReceiveOrderReceiveDate[this]; }
            set { Fields.ReceiveOrderReceiveDate[this] = value; }
        }

        [DisplayName("Receive Order Receive By"), Expression("jReceiveOrder.[ReceiveBy]")]
        public String ReceiveOrderReceiveBy
        {
            get { return Fields.ReceiveOrderReceiveBy[this]; }
            set { Fields.ReceiveOrderReceiveBy[this] = value; }
        }

        [DisplayName("Receive Order Acknowledge By"), Expression("jReceiveOrder.[AcknowledgeBy]")]
        public String ReceiveOrderAcknowledgeBy
        {
            get { return Fields.ReceiveOrderAcknowledgeBy[this]; }
            set { Fields.ReceiveOrderAcknowledgeBy[this] = value; }
        }

        [DisplayName("Receive Order Receive Order Status"), Expression("jReceiveOrder.[ReceiveOrderStatus]")]
        public String ReceiveOrderReceiveOrderStatus
        {
            get { return Fields.ReceiveOrderReceiveOrderStatus[this]; }
            set { Fields.ReceiveOrderReceiveOrderStatus[this] = value; }
        }

        [DisplayName("Receive Order Insert User Id"), Expression("jReceiveOrder.[InsertUserId]")]
        public Int16? ReceiveOrderInsertUserId
        {
            get { return Fields.ReceiveOrderInsertUserId[this]; }
            set { Fields.ReceiveOrderInsertUserId[this] = value; }
        }

        [DisplayName("Receive Order Insert Date"), Expression("jReceiveOrder.[InsertDate]")]
        public DateTime? ReceiveOrderInsertDate
        {
            get { return Fields.ReceiveOrderInsertDate[this]; }
            set { Fields.ReceiveOrderInsertDate[this] = value; }
        }

        [DisplayName("Receive Order Update User Id"), Expression("jReceiveOrder.[UpdateUserId]")]
        public Int16? ReceiveOrderUpdateUserId
        {
            get { return Fields.ReceiveOrderUpdateUserId[this]; }
            set { Fields.ReceiveOrderUpdateUserId[this] = value; }
        }

        [DisplayName("Receive Order Update Date"), Expression("jReceiveOrder.[UpdateDate]")]
        public DateTime? ReceiveOrderUpdateDate
        {
            get { return Fields.ReceiveOrderUpdateDate[this]; }
            set { Fields.ReceiveOrderUpdateDate[this] = value; }
        }

        [DisplayName("Receive Order Is Active"), Expression("jReceiveOrder.[IsActive]")]
        public Int16? ReceiveOrderIsActive
        {
            get { return Fields.ReceiveOrderIsActive[this]; }
            set { Fields.ReceiveOrderIsActive[this] = value; }
        }

        [DisplayName("Receive Order Company Id"), Expression("jReceiveOrder.[CompanyId]")]
        public Int32? ReceiveOrderCompanyId
        {
            get { return Fields.ReceiveOrderCompanyId[this]; }
            set { Fields.ReceiveOrderCompanyId[this] = value; }
        }

        [DisplayName("Product Product Number"), Expression("jProduct.[ProductNumber]")]
        public String ProductProductNumber
        {
            get { return Fields.ProductProductNumber[this]; }
            set { Fields.ProductProductNumber[this] = value; }
        }

        [DisplayName("Product Model Name"), Expression("jProduct.[ModelName]")]
        public String ProductModelName
        {
            get { return Fields.ProductModelName[this]; }
            set { Fields.ProductModelName[this] = value; }
        }

        [DisplayName("Product Category Unit Id"), Expression("jProduct.[CategoryUnitID]")]
        public Int32? ProductCategoryUnitId
        {
            get { return Fields.ProductCategoryUnitId[this]; }
            set { Fields.ProductCategoryUnitId[this] = value; }
        }

        [DisplayName("Product Unit Stock Id"), Expression("jProduct.[UnitStockID]")]
        public Int32? ProductUnitStockId
        {
            get { return Fields.ProductUnitStockId[this]; }
            set { Fields.ProductUnitStockId[this] = value; }
        }

        [DisplayName("Product Part Number"), Expression("jProduct.[PartNumber]")]
        public String ProductPartNumber
        {
            get { return Fields.ProductPartNumber[this]; }
            set { Fields.ProductPartNumber[this] = value; }
        }

        [DisplayName("Product Product Type Id"), Expression("jProduct.[ProductTypeID]")]
        public Int32? ProductProductTypeId
        {
            get { return Fields.ProductProductTypeId[this]; }
            set { Fields.ProductProductTypeId[this] = value; }
        }

        [DisplayName("Product Minimum Stock"), Expression("jProduct.[MinimumStock]")]
        public Int32? ProductMinimumStock
        {
            get { return Fields.ProductMinimumStock[this]; }
            set { Fields.ProductMinimumStock[this] = value; }
        }

        [DisplayName("Product Continued"), Expression("jProduct.[Continued]")]
        public Boolean? ProductContinued
        {
            get { return Fields.ProductContinued[this]; }
            set { Fields.ProductContinued[this] = value; }
        }

        [DisplayName("Product Product Image"), Expression("jProduct.[ProductImage]")]
        public String ProductProductImage
        {
            get { return Fields.ProductProductImage[this]; }
            set { Fields.ProductProductImage[this] = value; }
        }

        [DisplayName("Product Description"), Expression("jProduct.[Description]")]
        public String ProductDescription
        {
            get { return Fields.ProductDescription[this]; }
            set { Fields.ProductDescription[this] = value; }
        }

        [DisplayName("Product Bin Location Id"), Expression("jProduct.[BinLocationID]")]
        public Int32? ProductBinLocationId
        {
            get { return Fields.ProductBinLocationId[this]; }
            set { Fields.ProductBinLocationId[this] = value; }
        }

        [DisplayName("Product Insert User Id"), Expression("jProduct.[InsertUserId]")]
        public Int16? ProductInsertUserId
        {
            get { return Fields.ProductInsertUserId[this]; }
            set { Fields.ProductInsertUserId[this] = value; }
        }

        [DisplayName("Product Insert Date"), Expression("jProduct.[InsertDate]")]
        public DateTime? ProductInsertDate
        {
            get { return Fields.ProductInsertDate[this]; }
            set { Fields.ProductInsertDate[this] = value; }
        }

        [DisplayName("Product Update User Id"), Expression("jProduct.[UpdateUserId]")]
        public Int16? ProductUpdateUserId
        {
            get { return Fields.ProductUpdateUserId[this]; }
            set { Fields.ProductUpdateUserId[this] = value; }
        }

        [DisplayName("Product Update Date"), Expression("jProduct.[UpdateDate]")]
        public DateTime? ProductUpdateDate
        {
            get { return Fields.ProductUpdateDate[this]; }
            set { Fields.ProductUpdateDate[this] = value; }
        }

        [DisplayName("Product Is Active"), Expression("jProduct.[IsActive]")]
        public Int16? ProductIsActive
        {
            get { return Fields.ProductIsActive[this]; }
            set { Fields.ProductIsActive[this] = value; }
        }

        [DisplayName("Product Stock Quantity"), Expression("jProduct.[StockQuantity]")]
        public Int32? ProductStockQuantity
        {
            get { return Fields.ProductStockQuantity[this]; }
            set { Fields.ProductStockQuantity[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ReceiveOrderDetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReceiveOrderDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReceiveOrderDetailId;
            public Int32Field ReceiveOrderId;
            public Int32Field ProductId;
            public Int16Field PoQty;
            public Int16Field ReceiveQty;
            public Int16Field BackOrderQty;
            public DecimalField Price;
            public BooleanField ReceiveComplete;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;

            public Int16Field ReceiveOrderProductTypeId;
            public StringField ReceiveOrderReceiveOrderNumber;
            public Int32Field ReceiveOrderPurchaseOrderId;
            public DateTimeField ReceiveOrderReceiveDate;
            public StringField ReceiveOrderReceiveBy;
            public StringField ReceiveOrderAcknowledgeBy;
            public StringField ReceiveOrderReceiveOrderStatus;
            public Int16Field ReceiveOrderInsertUserId;
            public DateTimeField ReceiveOrderInsertDate;
            public Int16Field ReceiveOrderUpdateUserId;
            public DateTimeField ReceiveOrderUpdateDate;
            public Int16Field ReceiveOrderIsActive;
            public Int32Field ReceiveOrderCompanyId;

            public StringField ProductProductNumber;
            public StringField ProductModelName;
            public Int32Field ProductCategoryUnitId;
            public Int32Field ProductUnitStockId;
            public StringField ProductPartNumber;
            public Int32Field ProductProductTypeId;
            public Int32Field ProductMinimumStock;
            public BooleanField ProductContinued;
            public StringField ProductProductImage;
            public StringField ProductDescription;
            public Int32Field ProductBinLocationId;
            public Int16Field ProductInsertUserId;
            public DateTimeField ProductInsertDate;
            public Int16Field ProductUpdateUserId;
            public DateTimeField ProductUpdateDate;
            public Int16Field ProductIsActive;
            public Int32Field ProductStockQuantity;
        }
    }
}
