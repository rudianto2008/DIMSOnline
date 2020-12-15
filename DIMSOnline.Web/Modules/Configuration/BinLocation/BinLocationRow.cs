﻿
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[BinLocation]")]
    [DisplayName("Bin Location"), InstanceName("Bin Location")]
    [ReadPermission(PermissionKeys.Configuration)]
    [ModifyPermission(PermissionKeys.Configuration)]
    public sealed class BinLocationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Bin Location Id"), Column("BinLocationID"), Identity]
        public Int32? BinLocationId
        {
            get { return Fields.BinLocationId[this]; }
            set { Fields.BinLocationId[this] = value; }
        }

        [DisplayName("Bin Location"), Size(100), QuickSearch]
        public String BinLocation
        {
            get { return Fields.BinLocation[this]; }
            set { Fields.BinLocation[this] = value; }
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
            get { return Fields.BinLocationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BinLocation; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BinLocationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BinLocationId;
            public StringField BinLocation;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
        }
    }
}
