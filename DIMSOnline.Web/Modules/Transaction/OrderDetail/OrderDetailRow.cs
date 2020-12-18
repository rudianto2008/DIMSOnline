
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[OrderDetail]")]
    [DisplayName("Order Detail"), InstanceName("Order Detail")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class OrderDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Detail Id"), Column("OrderDetailID"), Identity]
        public Int32? OrderDetailId
        {
            get { return Fields.OrderDetailId[this]; }
            set { Fields.OrderDetailId[this] = value; }
        }

        [DisplayName("Order"), Column("OrderID"), ForeignKey("[dbo].[Orders]", "OrderID"), LeftJoin("jOrder"), TextualField("OrderOrderNumber")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductNumber")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Order Qty")]
        public Int16? OrderQty
        {
            get { return Fields.OrderQty[this]; }
            set { Fields.OrderQty[this] = value; }
        }

        [DisplayName("Stock")]
        public Int32? Stock
        {
            get { return Fields.Stock[this]; }
            set { Fields.Stock[this] = value; }
        }

        [DisplayName("Product Base Price Id")]
        public Int32? ProductBasePriceId
        {
            get { return Fields.ProductBasePriceId[this]; }
            set { Fields.ProductBasePriceId[this] = value; }
        }

        [DisplayName("Product Base Price Number"), Size(20), QuickSearch]
        public String ProductBasePriceNumber
        {
            get { return Fields.ProductBasePriceNumber[this]; }
            set { Fields.ProductBasePriceNumber[this] = value; }
        }

        [DisplayName("Order Category Id"), Column("OrderCategoryID")]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Base Price"), Size(19), Scale(4)]
        public Decimal? BasePrice
        {
            get { return Fields.BasePrice[this]; }
            set { Fields.BasePrice[this] = value; }
        }

        [DisplayName("Actual Price"), Size(19), Scale(4)]
        public Decimal? ActualPrice
        {
            get { return Fields.ActualPrice[this]; }
            set { Fields.ActualPrice[this] = value; }
        }

        [DisplayName("Gross Amount"), Size(19), Scale(4)]
        public Decimal? GrossAmount
        {
            get { return Fields.GrossAmount[this]; }
            set { Fields.GrossAmount[this] = value; }
        }

        [DisplayName("Discount Percent")]
        public Int16? DiscountPercent
        {
            get { return Fields.DiscountPercent[this]; }
            set { Fields.DiscountPercent[this] = value; }
        }

        [DisplayName("Discount"), Size(19), Scale(4)]
        public Decimal? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Total"), Size(19), Scale(4)]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Ppn"), Column("PPN"), Size(19), Scale(4)]
        public Decimal? Ppn
        {
            get { return Fields.Ppn[this]; }
            set { Fields.Ppn[this] = value; }
        }

        [DisplayName("Km In Use")]
        public Int32? KmInUse
        {
            get { return Fields.KmInUse[this]; }
            set { Fields.KmInUse[this] = value; }
        }

        [DisplayName("Service Quantity")]
        public Int16? ServiceQuantity
        {
            get { return Fields.ServiceQuantity[this]; }
            set { Fields.ServiceQuantity[this] = value; }
        }

        [DisplayName("Serial Number"), Size(50)]
        public String SerialNumber
        {
            get { return Fields.SerialNumber[this]; }
            set { Fields.SerialNumber[this] = value; }
        }

        [DisplayName("Manufacture Year"), Size(20)]
        public String ManufactureYear
        {
            get { return Fields.ManufactureYear[this]; }
            set { Fields.ManufactureYear[this] = value; }
        }

        [DisplayName("Warranty Number"), Size(50)]
        public String WarrantyNumber
        {
            get { return Fields.WarrantyNumber[this]; }
            set { Fields.WarrantyNumber[this] = value; }
        }

        [DisplayName("Service Unit Id"), Column("ServiceUnitID")]
        public Int32? ServiceUnitId
        {
            get { return Fields.ServiceUnitId[this]; }
            set { Fields.ServiceUnitId[this] = value; }
        }

        [DisplayName("As Alternative Item")]
        public Boolean? AsAlternativeItem
        {
            get { return Fields.AsAlternativeItem[this]; }
            set { Fields.AsAlternativeItem[this] = value; }
        }

        [DisplayName("Parent Item Id")]
        public Int32? ParentItemId
        {
            get { return Fields.ParentItemId[this]; }
            set { Fields.ParentItemId[this] = value; }
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

        [DisplayName("Order Order Number"), Expression("jOrder.[OrderNumber]")]
        public String OrderOrderNumber
        {
            get { return Fields.OrderOrderNumber[this]; }
            set { Fields.OrderOrderNumber[this] = value; }
        }

        [DisplayName("Order Order Date"), Expression("jOrder.[OrderDate]")]
        public DateTime? OrderOrderDate
        {
            get { return Fields.OrderOrderDate[this]; }
            set { Fields.OrderOrderDate[this] = value; }
        }

        [DisplayName("Order Customer Id"), Expression("jOrder.[CustomerID]")]
        public Int32? OrderCustomerId
        {
            get { return Fields.OrderCustomerId[this]; }
            set { Fields.OrderCustomerId[this] = value; }
        }

        [DisplayName("Order User Id"), Expression("jOrder.[UserID]")]
        public Int32? OrderUserId
        {
            get { return Fields.OrderUserId[this]; }
            set { Fields.OrderUserId[this] = value; }
        }

        [DisplayName("Order Product Type Id"), Expression("jOrder.[ProductTypeID]")]
        public Int32? OrderProductTypeId
        {
            get { return Fields.OrderProductTypeId[this]; }
            set { Fields.OrderProductTypeId[this] = value; }
        }

        [DisplayName("Order Km In Use"), Expression("jOrder.[KmInUse]")]
        public Int16? OrderKmInUse
        {
            get { return Fields.OrderKmInUse[this]; }
            set { Fields.OrderKmInUse[this] = value; }
        }

        [DisplayName("Order Payment Service"), Expression("jOrder.[PaymentService]")]
        public Decimal? OrderPaymentService
        {
            get { return Fields.OrderPaymentService[this]; }
            set { Fields.OrderPaymentService[this] = value; }
        }

        [DisplayName("Order Order Status"), Expression("jOrder.[OrderStatus]")]
        public String OrderOrderStatus
        {
            get { return Fields.OrderOrderStatus[this]; }
            set { Fields.OrderOrderStatus[this] = value; }
        }

        [DisplayName("Order Insert User Id"), Expression("jOrder.[InsertUserId]")]
        public Int16? OrderInsertUserId
        {
            get { return Fields.OrderInsertUserId[this]; }
            set { Fields.OrderInsertUserId[this] = value; }
        }

        [DisplayName("Order Insert Date"), Expression("jOrder.[InsertDate]")]
        public DateTime? OrderInsertDate
        {
            get { return Fields.OrderInsertDate[this]; }
            set { Fields.OrderInsertDate[this] = value; }
        }

        [DisplayName("Order Update User Id"), Expression("jOrder.[UpdateUserId]")]
        public Int16? OrderUpdateUserId
        {
            get { return Fields.OrderUpdateUserId[this]; }
            set { Fields.OrderUpdateUserId[this] = value; }
        }

        [DisplayName("Order Update Date"), Expression("jOrder.[UpdateDate]")]
        public DateTime? OrderUpdateDate
        {
            get { return Fields.OrderUpdateDate[this]; }
            set { Fields.OrderUpdateDate[this] = value; }
        }

        [DisplayName("Order Is Active"), Expression("jOrder.[IsActive]")]
        public Int16? OrderIsActive
        {
            get { return Fields.OrderIsActive[this]; }
            set { Fields.OrderIsActive[this] = value; }
        }

        [DisplayName("Order Company Id"), Expression("jOrder.[CompanyId]")]
        public Int32? OrderCompanyId
        {
            get { return Fields.OrderCompanyId[this]; }
            set { Fields.OrderCompanyId[this] = value; }
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
            get { return Fields.OrderDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductBasePriceNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderDetailId;
            public Int32Field OrderId;
            public Int32Field ProductId;
            public Int16Field OrderQty;
            public Int32Field Stock;
            public Int32Field ProductBasePriceId;
            public StringField ProductBasePriceNumber;
            public Int32Field OrderCategoryId;
            public DecimalField BasePrice;
            public DecimalField ActualPrice;
            public DecimalField GrossAmount;
            public Int16Field DiscountPercent;
            public DecimalField Discount;
            public DecimalField Total;
            public DecimalField Ppn;
            public Int32Field KmInUse;
            public Int16Field ServiceQuantity;
            public StringField SerialNumber;
            public StringField ManufactureYear;
            public StringField WarrantyNumber;
            public Int32Field ServiceUnitId;
            public BooleanField AsAlternativeItem;
            public Int32Field ParentItemId;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
            public DateTimeField CancellationDate;
            public Int32Field CancellationBy;

            public StringField OrderOrderNumber;
            public DateTimeField OrderOrderDate;
            public Int32Field OrderCustomerId;
            public Int32Field OrderUserId;
            public Int32Field OrderProductTypeId;
            public Int16Field OrderKmInUse;
            public DecimalField OrderPaymentService;
            public StringField OrderOrderStatus;
            public Int16Field OrderInsertUserId;
            public DateTimeField OrderInsertDate;
            public Int16Field OrderUpdateUserId;
            public DateTimeField OrderUpdateDate;
            public Int16Field OrderIsActive;
            public Int32Field OrderCompanyId;

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
