
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[Products]")]
    [DisplayName("Products"), InstanceName("Products")]
    [ReadPermission(PermissionKeys.Configuration)]
    [ModifyPermission(PermissionKeys.Configuration)]
    public sealed class ProductsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Id"), Column("ProductID"), Identity]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product Number"), Size(50), QuickSearch]
        public String ProductNumber
        {
            get { return Fields.ProductNumber[this]; }
            set { Fields.ProductNumber[this] = value; }
        }

        [DisplayName("Model Name"), Size(50)]
        public String ModelName
        {
            get { return Fields.ModelName[this]; }
            set { Fields.ModelName[this] = value; }
        }

        [DisplayName("Category Unit"), Column("CategoryUnitID"), ForeignKey("[dbo].[CategoryUnit]", "CategoryUnitID"), LeftJoin("jCategoryUnit"), TextualField("CategoryUnitCategoryUnitName")]
        public Int32? CategoryUnitId
        {
            get { return Fields.CategoryUnitId[this]; }
            set { Fields.CategoryUnitId[this] = value; }
        }

        [DisplayName("Unit Stock"), Column("UnitStockID"), ForeignKey("[dbo].[UnitStock]", "UnitStockID"), LeftJoin("jUnitStock"), TextualField("UnitStock")]
        public Int32? UnitStockId
        {
            get { return Fields.UnitStockId[this]; }
            set { Fields.UnitStockId[this] = value; }
        }

        [DisplayName("Part Number"), Size(50)]
        public String PartNumber
        {
            get { return Fields.PartNumber[this]; }
            set { Fields.PartNumber[this] = value; }
        }

        [DisplayName("Product Type"), Column("ProductTypeID"), ForeignKey("[dbo].[ProductType]", "ProductTypeID"), LeftJoin("jProductType"), TextualField("ProductTypeProductTypeName")]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
        }

        [DisplayName("Minimum Stock")]
        public Int32? MinimumStock
        {
            get { return Fields.MinimumStock[this]; }
            set { Fields.MinimumStock[this] = value; }
        }

        [DisplayName("Continued")]
        public Boolean? Continued
        {
            get { return Fields.Continued[this]; }
            set { Fields.Continued[this] = value; }
        }

        [DisplayName("Product Image"), Size(100)]
        public String ProductImage
        {
            get { return Fields.ProductImage[this]; }
            set { Fields.ProductImage[this] = value; }
        }

        [DisplayName("Description"), Size(100)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Bin Location"), Column("BinLocationID"), ForeignKey("[dbo].[BinLocation]", "BinLocationID"), LeftJoin("jBinLocation"), TextualField("BinLocation")]
        public Int32? BinLocationId
        {
            get { return Fields.BinLocationId[this]; }
            set { Fields.BinLocationId[this] = value; }
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

        [DisplayName("Stock Quantity")]
        public Int32? StockQuantity
        {
            get { return Fields.StockQuantity[this]; }
            set { Fields.StockQuantity[this] = value; }
        }

        [DisplayName("Category Unit Category Unit Name"), Expression("jCategoryUnit.[CategoryUnitName]")]
        public String CategoryUnitCategoryUnitName
        {
            get { return Fields.CategoryUnitCategoryUnitName[this]; }
            set { Fields.CategoryUnitCategoryUnitName[this] = value; }
        }

        [DisplayName("Category Unit Price Per Hour"), Expression("jCategoryUnit.[PricePerHour]")]
        public Decimal? CategoryUnitPricePerHour
        {
            get { return Fields.CategoryUnitPricePerHour[this]; }
            set { Fields.CategoryUnitPricePerHour[this] = value; }
        }

        [DisplayName("Unit Stock"), Expression("jUnitStock.[UnitStock]")]
        public String UnitStock
        {
            get { return Fields.UnitStock[this]; }
            set { Fields.UnitStock[this] = value; }
        }

        [DisplayName("Unit Stock Insert User Id"), Expression("jUnitStock.[InsertUserId]")]
        public Int16? UnitStockInsertUserId
        {
            get { return Fields.UnitStockInsertUserId[this]; }
            set { Fields.UnitStockInsertUserId[this] = value; }
        }

        [DisplayName("Unit Stock Insert Date"), Expression("jUnitStock.[InsertDate]")]
        public DateTime? UnitStockInsertDate
        {
            get { return Fields.UnitStockInsertDate[this]; }
            set { Fields.UnitStockInsertDate[this] = value; }
        }

        [DisplayName("Unit Stock Update User Id"), Expression("jUnitStock.[UpdateUserId]")]
        public Int16? UnitStockUpdateUserId
        {
            get { return Fields.UnitStockUpdateUserId[this]; }
            set { Fields.UnitStockUpdateUserId[this] = value; }
        }

        [DisplayName("Unit Stock Update Date"), Expression("jUnitStock.[UpdateDate]")]
        public DateTime? UnitStockUpdateDate
        {
            get { return Fields.UnitStockUpdateDate[this]; }
            set { Fields.UnitStockUpdateDate[this] = value; }
        }

        [DisplayName("Unit Stock Is Active"), Expression("jUnitStock.[IsActive]")]
        public Int16? UnitStockIsActive
        {
            get { return Fields.UnitStockIsActive[this]; }
            set { Fields.UnitStockIsActive[this] = value; }
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

        [DisplayName("Bin Location"), Expression("jBinLocation.[BinLocation]")]
        public String BinLocation
        {
            get { return Fields.BinLocation[this]; }
            set { Fields.BinLocation[this] = value; }
        }

        [DisplayName("Bin Location Insert User Id"), Expression("jBinLocation.[InsertUserId]")]
        public Int16? BinLocationInsertUserId
        {
            get { return Fields.BinLocationInsertUserId[this]; }
            set { Fields.BinLocationInsertUserId[this] = value; }
        }

        [DisplayName("Bin Location Insert Date"), Expression("jBinLocation.[InsertDate]")]
        public DateTime? BinLocationInsertDate
        {
            get { return Fields.BinLocationInsertDate[this]; }
            set { Fields.BinLocationInsertDate[this] = value; }
        }

        [DisplayName("Bin Location Update User Id"), Expression("jBinLocation.[UpdateUserId]")]
        public Int16? BinLocationUpdateUserId
        {
            get { return Fields.BinLocationUpdateUserId[this]; }
            set { Fields.BinLocationUpdateUserId[this] = value; }
        }

        [DisplayName("Bin Location Update Date"), Expression("jBinLocation.[UpdateDate]")]
        public DateTime? BinLocationUpdateDate
        {
            get { return Fields.BinLocationUpdateDate[this]; }
            set { Fields.BinLocationUpdateDate[this] = value; }
        }

        [DisplayName("Bin Location Is Active"), Expression("jBinLocation.[IsActive]")]
        public Int16? BinLocationIsActive
        {
            get { return Fields.BinLocationIsActive[this]; }
            set { Fields.BinLocationIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductId;
            public StringField ProductNumber;
            public StringField ModelName;
            public Int32Field CategoryUnitId;
            public Int32Field UnitStockId;
            public StringField PartNumber;
            public Int32Field ProductTypeId;
            public Int32Field MinimumStock;
            public BooleanField Continued;
            public StringField ProductImage;
            public StringField Description;
            public Int32Field BinLocationId;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
            public Int32Field StockQuantity;

            public StringField CategoryUnitCategoryUnitName;
            public DecimalField CategoryUnitPricePerHour;

            public StringField UnitStock;
            public Int16Field UnitStockInsertUserId;
            public DateTimeField UnitStockInsertDate;
            public Int16Field UnitStockUpdateUserId;
            public DateTimeField UnitStockUpdateDate;
            public Int16Field UnitStockIsActive;

            public StringField ProductTypeProductTypeName;
            public Int16Field ProductTypeInsertUserId;
            public DateTimeField ProductTypeInsertDate;
            public Int16Field ProductTypeUpdateUserId;
            public DateTimeField ProductTypeUpdateDate;
            public Int16Field ProductTypeIsActive;

            public StringField BinLocation;
            public Int16Field BinLocationInsertUserId;
            public DateTimeField BinLocationInsertDate;
            public Int16Field BinLocationUpdateUserId;
            public DateTimeField BinLocationUpdateDate;
            public Int16Field BinLocationIsActive;
        }
    }
}
