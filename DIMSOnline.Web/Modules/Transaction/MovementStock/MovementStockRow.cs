
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[MovementStock]")]
    [DisplayName("Movement Stock"), InstanceName("Movement Stock")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class MovementStockRow : Row, IIdRow, INameRow
    {
        [DisplayName("Movement Stock Id"), Column("MovementStockID"), Identity]
        public Int32? MovementStockId
        {
            get { return Fields.MovementStockId[this]; }
            set { Fields.MovementStockId[this] = value; }
        }

        [DisplayName("Movement Type"), Column("MovementTypeID"), ForeignKey("[dbo].[MovementType]", "MovementTypeID"), LeftJoin("jMovementType"), TextualField("MovementTypeMovementTypeName")]
        public Int32? MovementTypeId
        {
            get { return Fields.MovementTypeId[this]; }
            set { Fields.MovementTypeId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductNumber")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Movement Qty")]
        public Int32? MovementQty
        {
            get { return Fields.MovementQty[this]; }
            set { Fields.MovementQty[this] = value; }
        }

        [DisplayName("Movement Stock Number"), Size(50), QuickSearch]
        public String MovementStockNumber
        {
            get { return Fields.MovementStockNumber[this]; }
            set { Fields.MovementStockNumber[this] = value; }
        }

        [DisplayName("Description"), Size(500)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
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

        [DisplayName("Movement Type Movement Type Name"), Expression("jMovementType.[MovementTypeName]")]
        public String MovementTypeMovementTypeName
        {
            get { return Fields.MovementTypeMovementTypeName[this]; }
            set { Fields.MovementTypeMovementTypeName[this] = value; }
        }

        [DisplayName("Movement Type Status In Out"), Expression("jMovementType.[StatusInOut]")]
        public String MovementTypeStatusInOut
        {
            get { return Fields.MovementTypeStatusInOut[this]; }
            set { Fields.MovementTypeStatusInOut[this] = value; }
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
            get { return Fields.MovementStockId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MovementStockNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MovementStockRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MovementStockId;
            public Int32Field MovementTypeId;
            public Int32Field ProductId;
            public Int32Field MovementQty;
            public StringField MovementStockNumber;
            public StringField Description;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;

            public StringField MovementTypeMovementTypeName;
            public StringField MovementTypeStatusInOut;

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
