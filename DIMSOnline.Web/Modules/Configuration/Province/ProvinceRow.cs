
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[Province]")]
    [DisplayName("Province"), InstanceName("Province")]
    [ReadPermission(Configuration.PermissionKeys.Configuration)]
    [ModifyPermission(Configuration.PermissionKeys.Configuration)]
    [LookupScript("LookupProvince")]
    public sealed class ProvinceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Province Id"), Column("ProvinceID"), Identity]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("Province Code"), Size(50), QuickSearch]
        public String ProvinceCode
        {
            get { return Fields.ProvinceCode[this]; }
            set { Fields.ProvinceCode[this] = value; }
        }

        [DisplayName("Island"), Column("IslandID"), ForeignKey("[dbo].[Island]", "IslandID"), LeftJoin("jIsland"), TextualField("IslandIslandCode"), LookupInclude]
        public Int32? IslandId
        {
            get { return Fields.IslandId[this]; }
            set { Fields.IslandId[this] = value; }
        }

        [DisplayName("Province Name"), Size(50)]
        public String ProvinceName
        {
            get { return Fields.ProvinceName[this]; }
            set { Fields.ProvinceName[this] = value; }
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

        [DisplayName("Island Island Code"), Expression("jIsland.[IslandCode]")]
        public String IslandIslandCode
        {
            get { return Fields.IslandIslandCode[this]; }
            set { Fields.IslandIslandCode[this] = value; }
        }

        [DisplayName("Island Name"), Expression("jIsland.[IslandName]")]
        public String IslandIslandName
        {
            get { return Fields.IslandIslandName[this]; }
            set { Fields.IslandIslandName[this] = value; }
        }

        [DisplayName("Island Insert User Id"), Expression("jIsland.[InsertUserId]")]
        public Int16? IslandInsertUserId
        {
            get { return Fields.IslandInsertUserId[this]; }
            set { Fields.IslandInsertUserId[this] = value; }
        }

        [DisplayName("Island Insert Date"), Expression("jIsland.[InsertDate]")]
        public DateTime? IslandInsertDate
        {
            get { return Fields.IslandInsertDate[this]; }
            set { Fields.IslandInsertDate[this] = value; }
        }

        [DisplayName("Island Update User Id"), Expression("jIsland.[UpdateUserId]")]
        public Int16? IslandUpdateUserId
        {
            get { return Fields.IslandUpdateUserId[this]; }
            set { Fields.IslandUpdateUserId[this] = value; }
        }

        [DisplayName("Island Update Date"), Expression("jIsland.[UpdateDate]")]
        public DateTime? IslandUpdateDate
        {
            get { return Fields.IslandUpdateDate[this]; }
            set { Fields.IslandUpdateDate[this] = value; }
        }

        [DisplayName("Island Is Active"), Expression("jIsland.[IsActive]")]
        public Int16? IslandIsActive
        {
            get { return Fields.IslandIsActive[this]; }
            set { Fields.IslandIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProvinceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProvinceName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProvinceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProvinceId;
            public StringField ProvinceCode;
            public Int32Field IslandId;
            public StringField ProvinceName;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;

            public StringField IslandIslandCode;
            public StringField IslandIslandName;
            public Int16Field IslandInsertUserId;
            public DateTimeField IslandInsertDate;
            public Int16Field IslandUpdateUserId;
            public DateTimeField IslandUpdateDate;
            public Int16Field IslandIsActive;
        }
    }
}
