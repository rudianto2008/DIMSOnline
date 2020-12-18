
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[ServiceUnitTypePrice]")]
    [DisplayName("Service Unit Type Price"), InstanceName("Service Unit Type Price")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class ServiceUnitTypePriceRow : Row, IIdRow
    {
        [DisplayName("Service Unit Type Price Id"), Column("ServiceUnitTypePriceID"), Identity]
        public Int32? ServiceUnitTypePriceId
        {
            get { return Fields.ServiceUnitTypePriceId[this]; }
            set { Fields.ServiceUnitTypePriceId[this] = value; }
        }

        [DisplayName("Category Unit"), Column("CategoryUnitID"), ForeignKey("[dbo].[CategoryUnit]", "CategoryUnitID"), LeftJoin("jCategoryUnit"), TextualField("CategoryUnitCategoryUnitName")]
        public Int32? CategoryUnitId
        {
            get { return Fields.CategoryUnitId[this]; }
            set { Fields.CategoryUnitId[this] = value; }
        }

        [DisplayName("Price Per Hour"), Size(19), Scale(4)]
        public Decimal? PricePerHour
        {
            get { return Fields.PricePerHour[this]; }
            set { Fields.PricePerHour[this] = value; }
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
            get { return Fields.ServiceUnitTypePriceId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ServiceUnitTypePriceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ServiceUnitTypePriceId;
            public Int32Field CategoryUnitId;
            public DecimalField PricePerHour;

            public StringField CategoryUnitCategoryUnitName;
            public DecimalField CategoryUnitPricePerHour;
        }
    }
}
