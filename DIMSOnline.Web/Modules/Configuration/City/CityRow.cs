
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[City]")]
    [DisplayName("City"), InstanceName("City")]
    [ReadPermission(Configuration.PermissionKeys.Configuration)]
    [ModifyPermission(Configuration.PermissionKeys.Configuration)]
    [LookupScript("LookupCity")]
    public sealed class CityRow : Row, IIdRow, INameRow
    {
        [DisplayName("City Id"), Column("CityID"), Identity]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("City Code"), Size(10), QuickSearch]
        public String CityCode
        {
            get { return Fields.CityCode[this]; }
            set { Fields.CityCode[this] = value; }
        }

        [DisplayName("Province"), Column("ProvinceID"), ForeignKey("[dbo].[Province]", "ProvinceID"), LeftJoin("jProvince"), TextualField("ProvinceProvinceCode"), LookupInclude]
        [LookupEditor("LookupProvince", CascadeFrom = "IslandId", CascadeValue = "IslandId")]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("Island Id"), Column("IslandID"), ForeignKey("[dbo].[Island]", "IslandID"), LeftJoin("jIsland"), TextualField("IslandIslandCode"), LookupInclude]
        [LookupEditor("LookupIsland")]
        public Int32? IslandId
        {
            get { return Fields.IslandId[this]; }
            set { Fields.IslandId[this] = value; }
        }

        [DisplayName("Island Name"), Expression("jIsland.[IslandName]")]
        public String IslandIslandName
        {
            get { return Fields.IslandIslandName[this]; }
            set { Fields.IslandIslandName[this] = value; }
        }

        [DisplayName("City Name"), Size(50)]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
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

        [DisplayName("Province Province Code"), Expression("jProvince.[ProvinceCode]")]
        public String ProvinceProvinceCode
        {
            get { return Fields.ProvinceProvinceCode[this]; }
            set { Fields.ProvinceProvinceCode[this] = value; }
        }

        [DisplayName("Province Island Id"), Expression("jProvince.[IslandID]")]
        public Int32? ProvinceIslandId
        {
            get { return Fields.ProvinceIslandId[this]; }
            set { Fields.ProvinceIslandId[this] = value; }
        }

        [DisplayName("Province Name"), Expression("jProvince.[ProvinceName]")]
        public String ProvinceProvinceName
        {
            get { return Fields.ProvinceProvinceName[this]; }
            set { Fields.ProvinceProvinceName[this] = value; }
        }

        [DisplayName("Province Insert User Id"), Expression("jProvince.[InsertUserId]")]
        public Int16? ProvinceInsertUserId
        {
            get { return Fields.ProvinceInsertUserId[this]; }
            set { Fields.ProvinceInsertUserId[this] = value; }
        }

        [DisplayName("Province Insert Date"), Expression("jProvince.[InsertDate]")]
        public DateTime? ProvinceInsertDate
        {
            get { return Fields.ProvinceInsertDate[this]; }
            set { Fields.ProvinceInsertDate[this] = value; }
        }

        [DisplayName("Province Update User Id"), Expression("jProvince.[UpdateUserId]")]
        public Int16? ProvinceUpdateUserId
        {
            get { return Fields.ProvinceUpdateUserId[this]; }
            set { Fields.ProvinceUpdateUserId[this] = value; }
        }

        [DisplayName("Province Update Date"), Expression("jProvince.[UpdateDate]")]
        public DateTime? ProvinceUpdateDate
        {
            get { return Fields.ProvinceUpdateDate[this]; }
            set { Fields.ProvinceUpdateDate[this] = value; }
        }

        [DisplayName("Province Is Active"), Expression("jProvince.[IsActive]")]
        public Int16? ProvinceIsActive
        {
            get { return Fields.ProvinceIsActive[this]; }
            set { Fields.ProvinceIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CityName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CityRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CityId;
            public StringField CityCode;
            public Int32Field ProvinceId;
            public Int32Field IslandId;
            public StringField IslandIslandName;
            public StringField CityName;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;

            public StringField ProvinceProvinceCode;
            public Int32Field ProvinceIslandId;
            public StringField ProvinceProvinceName;
            public Int16Field ProvinceInsertUserId;
            public DateTimeField ProvinceInsertDate;
            public Int16Field ProvinceUpdateUserId;
            public DateTimeField ProvinceUpdateDate;
            public Int16Field ProvinceIsActive;
        }
    }
}
