
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[ServiceUnitType]")]
    [DisplayName("Service Unit Type"), InstanceName("Service Unit Type")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class ServiceUnitTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Service Unit Type Id"), Column("ServiceUnitTypeID"), Identity]
        public Int32? ServiceUnitTypeId
        {
            get { return Fields.ServiceUnitTypeId[this]; }
            set { Fields.ServiceUnitTypeId[this] = value; }
        }

        [DisplayName("Category Unit"), Column("CategoryUnitID"), ForeignKey("[dbo].[CategoryUnit]", "CategoryUnitID"), LeftJoin("jCategoryUnit"), TextualField("CategoryUnitCategoryUnitName")]
        public Int32? CategoryUnitId
        {
            get { return Fields.CategoryUnitId[this]; }
            set { Fields.CategoryUnitId[this] = value; }
        }

        [DisplayName("Product Id"), Column("ProductID")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Job Code No"), Size(20)]
        public String JobCodeNo
        {
            get { return Fields.JobCodeNo[this]; }
            set { Fields.JobCodeNo[this] = value; }
        }

        [DisplayName("Description")]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Charge Per Hour"), Size(19), Scale(4)]
        public Decimal? ChargePerHour
        {
            get { return Fields.ChargePerHour[this]; }
            set { Fields.ChargePerHour[this] = value; }
        }

        [DisplayName("Service Unit Type"), Size(50), QuickSearch]
        public String ServiceUnitType
        {
            get { return Fields.ServiceUnitType[this]; }
            set { Fields.ServiceUnitType[this] = value; }
        }

        [DisplayName("Standart Op Time"), Size(19), Scale(4)]
        public Decimal? StandartOpTime
        {
            get { return Fields.StandartOpTime[this]; }
            set { Fields.StandartOpTime[this] = value; }
        }

        [DisplayName("Continued")]
        public Boolean? Continued
        {
            get { return Fields.Continued[this]; }
            set { Fields.Continued[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.ServiceUnitTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ServiceUnitType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ServiceUnitTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ServiceUnitTypeId;
            public Int32Field CategoryUnitId;
            public Int32Field ProductId;
            public StringField JobCodeNo;
            public StringField Description;
            public DecimalField ChargePerHour;
            public StringField ServiceUnitType;
            public DecimalField StandartOpTime;
            public BooleanField Continued;

            public StringField CategoryUnitCategoryUnitName;
            public DecimalField CategoryUnitPricePerHour;
        }
    }
}
