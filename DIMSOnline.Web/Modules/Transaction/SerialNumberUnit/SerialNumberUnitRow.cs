
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[SerialNumberUnit]")]
    [DisplayName("Serial Number Unit"), InstanceName("Serial Number Unit")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class SerialNumberUnitRow : Row, IIdRow, INameRow
    {
        [DisplayName("Serial Number Unit Id"), Column("SerialNumberUnitID"), Identity]
        public Int32? SerialNumberUnitId
        {
            get { return Fields.SerialNumberUnitId[this]; }
            set { Fields.SerialNumberUnitId[this] = value; }
        }

        [DisplayName("Receive Order"), Column("ReceiveOrderID"), ForeignKey("[dbo].[ReceiveOrder]", "ReceiveOrderID"), LeftJoin("jReceiveOrder"), TextualField("ReceiveOrderReceiveOrderNumber")]
        public Int32? ReceiveOrderId
        {
            get { return Fields.ReceiveOrderId[this]; }
            set { Fields.ReceiveOrderId[this] = value; }
        }

        [DisplayName("Category Unit Id")]
        public Int32? CategoryUnitId
        {
            get { return Fields.CategoryUnitId[this]; }
            set { Fields.CategoryUnitId[this] = value; }
        }

        [DisplayName("Serial Number"), Size(50), QuickSearch]
        public String SerialNumber
        {
            get { return Fields.SerialNumber[this]; }
            set { Fields.SerialNumber[this] = value; }
        }

        [DisplayName("Manufacture Year"), Size(20)]
        public String ManufactureYear
        {
            get { return Fields.ManufactureYear[this]; }
            set { Fields.ManufactureYear[this] = value; }
        }

        [DisplayName("Warranty Number"), Size(50)]
        public String WarrantyNumber
        {
            get { return Fields.WarrantyNumber[this]; }
            set { Fields.WarrantyNumber[this] = value; }
        }

        [DisplayName("Available")]
        public Boolean? Available
        {
            get { return Fields.Available[this]; }
            set { Fields.Available[this] = value; }
        }

        [DisplayName("Receive Order Product Type Id"), Expression("jReceiveOrder.[ProductTypeID]")]
        public Int16? ReceiveOrderProductTypeId
        {
            get { return Fields.ReceiveOrderProductTypeId[this]; }
            set { Fields.ReceiveOrderProductTypeId[this] = value; }
        }

        [DisplayName("Receive Order Receive Order Number"), Expression("jReceiveOrder.[ReceiveOrderNumber]")]
        public String ReceiveOrderReceiveOrderNumber
        {
            get { return Fields.ReceiveOrderReceiveOrderNumber[this]; }
            set { Fields.ReceiveOrderReceiveOrderNumber[this] = value; }
        }

        [DisplayName("Receive Order Purchase Order Id"), Expression("jReceiveOrder.[PurchaseOrderID]")]
        public Int32? ReceiveOrderPurchaseOrderId
        {
            get { return Fields.ReceiveOrderPurchaseOrderId[this]; }
            set { Fields.ReceiveOrderPurchaseOrderId[this] = value; }
        }

        [DisplayName("Receive Order Receive Date"), Expression("jReceiveOrder.[ReceiveDate]")]
        public DateTime? ReceiveOrderReceiveDate
        {
            get { return Fields.ReceiveOrderReceiveDate[this]; }
            set { Fields.ReceiveOrderReceiveDate[this] = value; }
        }

        [DisplayName("Receive Order Receive By"), Expression("jReceiveOrder.[ReceiveBy]")]
        public String ReceiveOrderReceiveBy
        {
            get { return Fields.ReceiveOrderReceiveBy[this]; }
            set { Fields.ReceiveOrderReceiveBy[this] = value; }
        }

        [DisplayName("Receive Order Acknowledge By"), Expression("jReceiveOrder.[AcknowledgeBy]")]
        public String ReceiveOrderAcknowledgeBy
        {
            get { return Fields.ReceiveOrderAcknowledgeBy[this]; }
            set { Fields.ReceiveOrderAcknowledgeBy[this] = value; }
        }

        [DisplayName("Receive Order Receive Order Status"), Expression("jReceiveOrder.[ReceiveOrderStatus]")]
        public String ReceiveOrderReceiveOrderStatus
        {
            get { return Fields.ReceiveOrderReceiveOrderStatus[this]; }
            set { Fields.ReceiveOrderReceiveOrderStatus[this] = value; }
        }

        [DisplayName("Receive Order Insert User Id"), Expression("jReceiveOrder.[InsertUserId]")]
        public Int16? ReceiveOrderInsertUserId
        {
            get { return Fields.ReceiveOrderInsertUserId[this]; }
            set { Fields.ReceiveOrderInsertUserId[this] = value; }
        }

        [DisplayName("Receive Order Insert Date"), Expression("jReceiveOrder.[InsertDate]")]
        public DateTime? ReceiveOrderInsertDate
        {
            get { return Fields.ReceiveOrderInsertDate[this]; }
            set { Fields.ReceiveOrderInsertDate[this] = value; }
        }

        [DisplayName("Receive Order Update User Id"), Expression("jReceiveOrder.[UpdateUserId]")]
        public Int16? ReceiveOrderUpdateUserId
        {
            get { return Fields.ReceiveOrderUpdateUserId[this]; }
            set { Fields.ReceiveOrderUpdateUserId[this] = value; }
        }

        [DisplayName("Receive Order Update Date"), Expression("jReceiveOrder.[UpdateDate]")]
        public DateTime? ReceiveOrderUpdateDate
        {
            get { return Fields.ReceiveOrderUpdateDate[this]; }
            set { Fields.ReceiveOrderUpdateDate[this] = value; }
        }

        [DisplayName("Receive Order Is Active"), Expression("jReceiveOrder.[IsActive]")]
        public Int16? ReceiveOrderIsActive
        {
            get { return Fields.ReceiveOrderIsActive[this]; }
            set { Fields.ReceiveOrderIsActive[this] = value; }
        }

        [DisplayName("Receive Order Company Id"), Expression("jReceiveOrder.[CompanyId]")]
        public Int32? ReceiveOrderCompanyId
        {
            get { return Fields.ReceiveOrderCompanyId[this]; }
            set { Fields.ReceiveOrderCompanyId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SerialNumberUnitId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SerialNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SerialNumberUnitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SerialNumberUnitId;
            public Int32Field ReceiveOrderId;
            public Int32Field CategoryUnitId;
            public StringField SerialNumber;
            public StringField ManufactureYear;
            public StringField WarrantyNumber;
            public BooleanField Available;

            public Int16Field ReceiveOrderProductTypeId;
            public StringField ReceiveOrderReceiveOrderNumber;
            public Int32Field ReceiveOrderPurchaseOrderId;
            public DateTimeField ReceiveOrderReceiveDate;
            public StringField ReceiveOrderReceiveBy;
            public StringField ReceiveOrderAcknowledgeBy;
            public StringField ReceiveOrderReceiveOrderStatus;
            public Int16Field ReceiveOrderInsertUserId;
            public DateTimeField ReceiveOrderInsertDate;
            public Int16Field ReceiveOrderUpdateUserId;
            public DateTimeField ReceiveOrderUpdateDate;
            public Int16Field ReceiveOrderIsActive;
            public Int32Field ReceiveOrderCompanyId;
        }
    }
}
