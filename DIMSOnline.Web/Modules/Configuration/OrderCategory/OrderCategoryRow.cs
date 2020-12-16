
namespace DIMSOnline.Configuration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configuration"), TableName("[dbo].[OrderCategory]")]
    [DisplayName("Order Category"), InstanceName("Order Category")]
    [ReadPermission(PermissionKeys.Configuration)]
    [ModifyPermission(PermissionKeys.Configuration)]
    public sealed class OrderCategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Category Id"), Column("OrderCategoryID"), Identity]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Order Category Name"), Size(50), QuickSearch]
        public String OrderCategoryName
        {
            get { return Fields.OrderCategoryName[this]; }
            set { Fields.OrderCategoryName[this] = value; }
        }

        [DisplayName("Description"), Size(100)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
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
            get { return Fields.OrderCategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderCategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderCategoryId;
            public StringField OrderCategoryName;
            public StringField Description;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
        }
    }
}
