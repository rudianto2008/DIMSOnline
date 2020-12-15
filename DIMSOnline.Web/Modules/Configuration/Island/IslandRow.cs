
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[Island]")]
    [DisplayName("Island"), InstanceName("Island")]
    [ReadPermission(Configuration.PermissionKeys.Configuration)]
    [ModifyPermission(Configuration.PermissionKeys.Configuration)]
    public sealed class IslandRow : Row, IIdRow, INameRow
    {
        [DisplayName("Island Id"), Column("IslandID"), Identity]
        public Int32? IslandId
        {
            get { return Fields.IslandId[this]; }
            set { Fields.IslandId[this] = value; }
        }

        [DisplayName("Island Code"), Size(50), QuickSearch]
        public String IslandCode
        {
            get { return Fields.IslandCode[this]; }
            set { Fields.IslandCode[this] = value; }
        }

        [DisplayName("Island Name"), Size(50), NotNull]
        public String IslandName
        {
            get { return Fields.IslandName[this]; }
            set { Fields.IslandName[this] = value; }
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
            get { return Fields.IslandId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.IslandCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public IslandRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IslandId;
            public StringField IslandCode;
            public StringField IslandName;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
        }
    }
}
