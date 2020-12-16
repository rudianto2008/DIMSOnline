
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[MovementType]")]
    [DisplayName("Movement Type"), InstanceName("Movement Type")]
    [ReadPermission(PermissionKeys.Configuration)]
    [ModifyPermission(PermissionKeys.Configuration)]
    public sealed class MovementTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Movement Type Id"), Column("MovementTypeID"), Identity]
        public Int32? MovementTypeId
        {
            get { return Fields.MovementTypeId[this]; }
            set { Fields.MovementTypeId[this] = value; }
        }

        [DisplayName("Movement Type Name"), Size(50), QuickSearch]
        public String MovementTypeName
        {
            get { return Fields.MovementTypeName[this]; }
            set { Fields.MovementTypeName[this] = value; }
        }

        [DisplayName("Status In Out"), Size(5)]
        public String StatusInOut
        {
            get { return Fields.StatusInOut[this]; }
            set { Fields.StatusInOut[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MovementTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MovementTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MovementTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MovementTypeId;
            public StringField MovementTypeName;
            public StringField StatusInOut;
        }
    }
}
