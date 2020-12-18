
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[PurchaseOrderDetail]")]
    [DisplayName("Purchase Order Detail"), InstanceName("Purchase Order Detail")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class PurchaseOrderDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Purchase Order Detail Id"), Column("PurchaseOrderDetailID"), Identity]
        public Int32? PurchaseOrderDetailId
        {
            get { return Fields.PurchaseOrderDetailId[this]; }
            set { Fields.PurchaseOrderDetailId[this] = value; }
        }

        [DisplayName("Purchase Order"), Column("PurchaseOrderID"), ForeignKey("[dbo].[PurchaseOrder]", "PurchaseOrderID"), LeftJoin("jPurchaseOrder"), TextualField("PurchaseOrderPurchaseOrderNumber")]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductNumber")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Quantity")]
        public Int16? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Product Price"), Column("ProductPriceID"), ForeignKey("[dbo].[ProductPrice]", "ProductPriceID"), LeftJoin("jProductPrice"), TextualField("ProductPriceProductPriceNumber")]
        public Int32? ProductPriceId
        {
            get { return Fields.ProductPriceId[this]; }
            set { Fields.ProductPriceId[this] = value; }
        }

        [DisplayName("Product Price Number"), Size(50), QuickSearch]
        public String ProductPriceNumber
        {
            get { return Fields.ProductPriceNumber[this]; }
            set { Fields.ProductPriceNumber[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(4)]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Gross Amount"), Size(19), Scale(4)]
        public Decimal? GrossAmount
        {
            get { return Fields.GrossAmount[this]; }
            set { Fields.GrossAmount[this] = value; }
        }

        [DisplayName("Ppn"), Column("PPN"), Size(19), Scale(4)]
        public Decimal? Ppn
        {
            get { return Fields.Ppn[this]; }
            set { Fields.Ppn[this] = value; }
        }

        [DisplayName("Total"), Size(19), Scale(4)]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
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

        [DisplayName("Receive Order Detail Id"), Column("ReceiveOrderDetailID")]
        public Int32? ReceiveOrderDetailId
        {
            get { return Fields.ReceiveOrderDetailId[this]; }
            set { Fields.ReceiveOrderDetailId[this] = value; }
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

        [DisplayName("Cancellation Date")]
        public DateTime? CancellationDate
        {
            get { return Fields.CancellationDate[this]; }
            set { Fields.CancellationDate[this] = value; }
        }

        [DisplayName("Cancellation By")]
        public Int32? CancellationBy
        {
            get { return Fields.CancellationBy[this]; }
            set { Fields.CancellationBy[this] = value; }
        }

        [DisplayName("Discount Request"), Size(19), Scale(4)]
        public Decimal? DiscountRequest
        {
            get { return Fields.DiscountRequest[this]; }
            set { Fields.DiscountRequest[this] = value; }
        }

        [DisplayName("Supporting Document Discount")]
        public String SupportingDocumentDiscount
        {
            get { return Fields.SupportingDocumentDiscount[this]; }
            set { Fields.SupportingDocumentDiscount[this] = value; }
        }

        [DisplayName("Approval Status Discount"), Size(50)]
        public String ApprovalStatusDiscount
        {
            get { return Fields.ApprovalStatusDiscount[this]; }
            set { Fields.ApprovalStatusDiscount[this] = value; }
        }

        [DisplayName("Comment Discount"), Size(50)]
        public String CommentDiscount
        {
            get { return Fields.CommentDiscount[this]; }
            set { Fields.CommentDiscount[this] = value; }
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

        [DisplayName("Product Price Product Price Number"), Expression("jProductPrice.[ProductPriceNumber]")]
        public String ProductPriceProductPriceNumber
        {
            get { return Fields.ProductPriceProductPriceNumber[this]; }
            set { Fields.ProductPriceProductPriceNumber[this] = value; }
        }

        [DisplayName("Product Price Product Id"), Expression("jProductPrice.[ProductID]")]
        public Int32? ProductPriceProductId
        {
            get { return Fields.ProductPriceProductId[this]; }
            set { Fields.ProductPriceProductId[this] = value; }
        }

        [DisplayName("Product Price Order Category Id"), Expression("jProductPrice.[OrderCategoryID]")]
        public Int32? ProductPriceOrderCategoryId
        {
            get { return Fields.ProductPriceOrderCategoryId[this]; }
            set { Fields.ProductPriceOrderCategoryId[this] = value; }
        }

        [DisplayName("Product Price Price"), Expression("jProductPrice.[Price]")]
        public Decimal? ProductPricePrice
        {
            get { return Fields.ProductPricePrice[this]; }
            set { Fields.ProductPricePrice[this] = value; }
        }

        [DisplayName("Product Price Continued"), Expression("jProductPrice.[Continued]")]
        public Boolean? ProductPriceContinued
        {
            get { return Fields.ProductPriceContinued[this]; }
            set { Fields.ProductPriceContinued[this] = value; }
        }

        [DisplayName("Product Price Insert User Id"), Expression("jProductPrice.[InsertUserId]")]
        public Int16? ProductPriceInsertUserId
        {
            get { return Fields.ProductPriceInsertUserId[this]; }
            set { Fields.ProductPriceInsertUserId[this] = value; }
        }

        [DisplayName("Product Price Insert Date"), Expression("jProductPrice.[InsertDate]")]
        public DateTime? ProductPriceInsertDate
        {
            get { return Fields.ProductPriceInsertDate[this]; }
            set { Fields.ProductPriceInsertDate[this] = value; }
        }

        [DisplayName("Product Price Update User Id"), Expression("jProductPrice.[UpdateUserId]")]
        public Int16? ProductPriceUpdateUserId
        {
            get { return Fields.ProductPriceUpdateUserId[this]; }
            set { Fields.ProductPriceUpdateUserId[this] = value; }
        }

        [DisplayName("Product Price Update Date"), Expression("jProductPrice.[UpdateDate]")]
        public DateTime? ProductPriceUpdateDate
        {
            get { return Fields.ProductPriceUpdateDate[this]; }
            set { Fields.ProductPriceUpdateDate[this] = value; }
        }

        [DisplayName("Product Price Is Active"), Expression("jProductPrice.[IsActive]")]
        public Int16? ProductPriceIsActive
        {
            get { return Fields.ProductPriceIsActive[this]; }
            set { Fields.ProductPriceIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseOrderDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductPriceNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseOrderDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchaseOrderDetailId;
            public Int32Field PurchaseOrderId;
            public Int32Field ProductId;
            public Int16Field Quantity;
            public Int32Field ProductPriceId;
            public StringField ProductPriceNumber;
            public DecimalField Price;
            public DecimalField GrossAmount;
            public DecimalField Ppn;
            public DecimalField Total;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
            public Int32Field ReceiveOrderDetailId;
            public Int16Field ReceiveQty;
            public Int16Field BackOrderQty;
            public DateTimeField CancellationDate;
            public Int32Field CancellationBy;
            public DecimalField DiscountRequest;
            public StringField SupportingDocumentDiscount;
            public StringField ApprovalStatusDiscount;
            public StringField CommentDiscount;

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

            public StringField ProductPriceProductPriceNumber;
            public Int32Field ProductPriceProductId;
            public Int32Field ProductPriceOrderCategoryId;
            public DecimalField ProductPricePrice;
            public BooleanField ProductPriceContinued;
            public Int16Field ProductPriceInsertUserId;
            public DateTimeField ProductPriceInsertDate;
            public Int16Field ProductPriceUpdateUserId;
            public DateTimeField ProductPriceUpdateDate;
            public Int16Field ProductPriceIsActive;
        }
    }
}
