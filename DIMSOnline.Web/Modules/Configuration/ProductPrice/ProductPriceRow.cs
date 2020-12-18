
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[ProductPrice]")]
    [DisplayName("Product Price"), InstanceName("Product Price")]
    [ReadPermission(PermissionKeys.Configuration)]
    [ModifyPermission(PermissionKeys.Configuration)]
    public sealed class ProductPriceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Price Id"), Column("ProductPriceID"), Identity]
        public Int32? ProductPriceId
        {
            get { return Fields.ProductPriceId[this]; }
            set { Fields.ProductPriceId[this] = value; }
        }

        [DisplayName("Product Price Number"), Size(50), NotNull, QuickSearch]
        public String ProductPriceNumber
        {
            get { return Fields.ProductPriceNumber[this]; }
            set { Fields.ProductPriceNumber[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductNumber")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Order Category"), Column("OrderCategoryID"), ForeignKey("[dbo].[OrderCategory]", "OrderCategoryID"), LeftJoin("jOrderCategory"), TextualField("OrderCategoryOrderCategoryName")]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(4)]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Continued")]
        public Boolean? Continued
        {
            get { return Fields.Continued[this]; }
            set { Fields.Continued[this] = value; }
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

        [DisplayName("Order Category Order Category Name"), Expression("jOrderCategory.[OrderCategoryName]")]
        public String OrderCategoryOrderCategoryName
        {
            get { return Fields.OrderCategoryOrderCategoryName[this]; }
            set { Fields.OrderCategoryOrderCategoryName[this] = value; }
        }

        [DisplayName("Order Category Description"), Expression("jOrderCategory.[Description]")]
        public String OrderCategoryDescription
        {
            get { return Fields.OrderCategoryDescription[this]; }
            set { Fields.OrderCategoryDescription[this] = value; }
        }

        [DisplayName("Order Category Insert User Id"), Expression("jOrderCategory.[InsertUserId]")]
        public Int16? OrderCategoryInsertUserId
        {
            get { return Fields.OrderCategoryInsertUserId[this]; }
            set { Fields.OrderCategoryInsertUserId[this] = value; }
        }

        [DisplayName("Order Category Insert Date"), Expression("jOrderCategory.[InsertDate]")]
        public DateTime? OrderCategoryInsertDate
        {
            get { return Fields.OrderCategoryInsertDate[this]; }
            set { Fields.OrderCategoryInsertDate[this] = value; }
        }

        [DisplayName("Order Category Update User Id"), Expression("jOrderCategory.[UpdateUserId]")]
        public Int16? OrderCategoryUpdateUserId
        {
            get { return Fields.OrderCategoryUpdateUserId[this]; }
            set { Fields.OrderCategoryUpdateUserId[this] = value; }
        }

        [DisplayName("Order Category Update Date"), Expression("jOrderCategory.[UpdateDate]")]
        public DateTime? OrderCategoryUpdateDate
        {
            get { return Fields.OrderCategoryUpdateDate[this]; }
            set { Fields.OrderCategoryUpdateDate[this] = value; }
        }

        [DisplayName("Order Category Is Active"), Expression("jOrderCategory.[IsActive]")]
        public Int16? OrderCategoryIsActive
        {
            get { return Fields.OrderCategoryIsActive[this]; }
            set { Fields.OrderCategoryIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductPriceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductPriceNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductPriceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductPriceId;
            public StringField ProductPriceNumber;
            public Int32Field ProductId;
            public Int32Field OrderCategoryId;
            public DecimalField Price;
            public BooleanField Continued;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;

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

            public StringField OrderCategoryOrderCategoryName;
            public StringField OrderCategoryDescription;
            public Int16Field OrderCategoryInsertUserId;
            public DateTimeField OrderCategoryInsertDate;
            public Int16Field OrderCategoryUpdateUserId;
            public DateTimeField OrderCategoryUpdateDate;
            public Int16Field OrderCategoryIsActive;
        }
    }
}
