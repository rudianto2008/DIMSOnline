
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[UnitStock]")]
    [DisplayName("Unit Stock"), InstanceName("Unit Stock")]
    [ReadPermission(PermissionKeys.Configuration)]
    [ModifyPermission(PermissionKeys.Configuration)]
    public sealed class UnitStockRow : Row, IIdRow, INameRow
    {
        [DisplayName("Unit Stock Id"), Column("UnitStockID"), Identity]
        public Int32? UnitStockId
        {
            get { return Fields.UnitStockId[this]; }
            set { Fields.UnitStockId[this] = value; }
        }

        [DisplayName("Unit Stock"), Size(50), QuickSearch]
        public String UnitStock
        {
            get { return Fields.UnitStock[this]; }
            set { Fields.UnitStock[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.UnitStockId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UnitStock; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UnitStockRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UnitStockId;
            public StringField UnitStock;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
        }
    }
}
