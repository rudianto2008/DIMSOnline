
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[CategoryUnit]")]
    [DisplayName("Category Unit"), InstanceName("Category Unit")]
    [ReadPermission(PermissionKeys.Configuration)]
    [ModifyPermission(PermissionKeys.Configuration)]
    public sealed class CategoryUnitRow : Row, IIdRow, INameRow
    {
        [DisplayName("Category Unit Id"), Column("CategoryUnitID"), Identity]
        public Int32? CategoryUnitId
        {
            get { return Fields.CategoryUnitId[this]; }
            set { Fields.CategoryUnitId[this] = value; }
        }

        [DisplayName("Category Unit Name"), Size(50), QuickSearch]
        public String CategoryUnitName
        {
            get { return Fields.CategoryUnitName[this]; }
            set { Fields.CategoryUnitName[this] = value; }
        }

        [DisplayName("Price Per Hour"), Size(19), Scale(4)]
        public Decimal? PricePerHour
        {
            get { return Fields.PricePerHour[this]; }
            set { Fields.PricePerHour[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryUnitId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryUnitName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryUnitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryUnitId;
            public StringField CategoryUnitName;
            public DecimalField PricePerHour;
        }
    }
}
