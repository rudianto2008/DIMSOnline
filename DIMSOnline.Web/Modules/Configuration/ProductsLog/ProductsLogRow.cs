
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[ProductsLog]")]
    [DisplayName("Products Log"), InstanceName("Products Log")]
    [ReadPermission(PermissionKeys.Configuration)]
    [ModifyPermission(PermissionKeys.Configuration)]
    public sealed class ProductsLogRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Log Id"), Column("ProductLogID"), Identity]
        public Int32? ProductLogId
        {
            get { return Fields.ProductLogId[this]; }
            set { Fields.ProductLogId[this] = value; }
        }

        [DisplayName("Product Id"), Column("ProductID"), NotNull]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Model Name"), Size(50), QuickSearch]
        public String ModelName
        {
            get { return Fields.ModelName[this]; }
            set { Fields.ModelName[this] = value; }
        }

        [DisplayName("Unit Stock"), Size(30)]
        public String UnitStock
        {
            get { return Fields.UnitStock[this]; }
            set { Fields.UnitStock[this] = value; }
        }

        [DisplayName("Part Number"), Size(50)]
        public String PartNumber
        {
            get { return Fields.PartNumber[this]; }
            set { Fields.PartNumber[this] = value; }
        }

        [DisplayName("Product Type Id"), Column("ProductTypeID")]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
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

        [DisplayName("Bin Location"), Size(100)]
        public String BinLocation
        {
            get { return Fields.BinLocation[this]; }
            set { Fields.BinLocation[this] = value; }
        }

        [DisplayName("Operation Type"), NotNull]
        public Int16? OperationType
        {
            get { return Fields.OperationType[this]; }
            set { Fields.OperationType[this] = value; }
        }

        [DisplayName("Changing User Id")]
        public Int32? ChangingUserId
        {
            get { return Fields.ChangingUserId[this]; }
            set { Fields.ChangingUserId[this] = value; }
        }

        [DisplayName("Valid From"), NotNull]
        public DateTime? ValidFrom
        {
            get { return Fields.ValidFrom[this]; }
            set { Fields.ValidFrom[this] = value; }
        }

        [DisplayName("Valid Until"), NotNull]
        public DateTime? ValidUntil
        {
            get { return Fields.ValidUntil[this]; }
            set { Fields.ValidUntil[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductLogId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ModelName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductsLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductLogId;
            public Int32Field ProductId;
            public StringField ModelName;
            public StringField UnitStock;
            public StringField PartNumber;
            public Int32Field ProductTypeId;
            public BooleanField Continued;
            public StringField ProductImage;
            public StringField Description;
            public StringField BinLocation;
            public Int16Field OperationType;
            public Int32Field ChangingUserId;
            public DateTimeField ValidFrom;
            public DateTimeField ValidUntil;
        }
    }
}
