
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[ServiceUnitDetail]")]
    [DisplayName("Service Unit Detail"), InstanceName("Service Unit Detail")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class ServiceUnitDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Service Unit Detail Id"), Column("ServiceUnitDetailID"), Identity]
        public Int32? ServiceUnitDetailId
        {
            get { return Fields.ServiceUnitDetailId[this]; }
            set { Fields.ServiceUnitDetailId[this] = value; }
        }

        [DisplayName("Service Unit"), Column("ServiceUnitID"), ForeignKey("[dbo].[ServiceUnit]", "ServiceUnitID"), LeftJoin("jServiceUnit"), TextualField("ServiceUnitServiceUnitNumber")]
        public Int32? ServiceUnitId
        {
            get { return Fields.ServiceUnitId[this]; }
            set { Fields.ServiceUnitId[this] = value; }
        }

        [DisplayName("Service Unit Type"), Column("ServiceUnitTypeID"), ForeignKey("[dbo].[ServiceUnitType]", "ServiceUnitTypeID"), LeftJoin("jServiceUnitType"), TextualField("ServiceUnitTypeJobCodeNo")]
        public Int32? ServiceUnitTypeId
        {
            get { return Fields.ServiceUnitTypeId[this]; }
            set { Fields.ServiceUnitTypeId[this] = value; }
        }

        [DisplayName("Charge Per Hour"), Size(19), Scale(4)]
        public Decimal? ChargePerHour
        {
            get { return Fields.ChargePerHour[this]; }
            set { Fields.ChargePerHour[this] = value; }
        }

        [DisplayName("Service Hour")]
        public Int32? ServiceHour
        {
            get { return Fields.ServiceHour[this]; }
            set { Fields.ServiceHour[this] = value; }
        }

        [DisplayName("Service Charge"), Size(19), Scale(4)]
        public Decimal? ServiceCharge
        {
            get { return Fields.ServiceCharge[this]; }
            set { Fields.ServiceCharge[this] = value; }
        }

        [DisplayName("Service By"), Size(50), QuickSearch]
        public String ServiceBy
        {
            get { return Fields.ServiceBy[this]; }
            set { Fields.ServiceBy[this] = value; }
        }

        [DisplayName("Km In Use")]
        public Int32? KmInUse
        {
            get { return Fields.KmInUse[this]; }
            set { Fields.KmInUse[this] = value; }
        }

        [DisplayName("Service Date")]
        public DateTime? ServiceDate
        {
            get { return Fields.ServiceDate[this]; }
            set { Fields.ServiceDate[this] = value; }
        }

        [DisplayName("Order Id Service"), Column("OrderIDService")]
        public Int32? OrderIdService
        {
            get { return Fields.OrderIdService[this]; }
            set { Fields.OrderIdService[this] = value; }
        }

        [DisplayName("Service Unit Service Unit Number"), Expression("jServiceUnit.[ServiceUnitNumber]")]
        public String ServiceUnitServiceUnitNumber
        {
            get { return Fields.ServiceUnitServiceUnitNumber[this]; }
            set { Fields.ServiceUnitServiceUnitNumber[this] = value; }
        }

        [DisplayName("Service Unit Product Id"), Expression("jServiceUnit.[ProductID]")]
        public Int32? ServiceUnitProductId
        {
            get { return Fields.ServiceUnitProductId[this]; }
            set { Fields.ServiceUnitProductId[this] = value; }
        }

        [DisplayName("Service Unit Order Unit Id"), Expression("jServiceUnit.[OrderUnitID]")]
        public Int32? ServiceUnitOrderUnitId
        {
            get { return Fields.ServiceUnitOrderUnitId[this]; }
            set { Fields.ServiceUnitOrderUnitId[this] = value; }
        }

        [DisplayName("Service Unit Customer Id"), Expression("jServiceUnit.[CustomerID]")]
        public Int32? ServiceUnitCustomerId
        {
            get { return Fields.ServiceUnitCustomerId[this]; }
            set { Fields.ServiceUnitCustomerId[this] = value; }
        }

        [DisplayName("Service Unit Service Date"), Expression("jServiceUnit.[ServiceDate]")]
        public DateTime? ServiceUnitServiceDate
        {
            get { return Fields.ServiceUnitServiceDate[this]; }
            set { Fields.ServiceUnitServiceDate[this] = value; }
        }

        [DisplayName("Service Unit Service By"), Expression("jServiceUnit.[ServiceBy]")]
        public String ServiceUnitServiceBy
        {
            get { return Fields.ServiceUnitServiceBy[this]; }
            set { Fields.ServiceUnitServiceBy[this] = value; }
        }

        [DisplayName("Service Unit Serial Number"), Expression("jServiceUnit.[SerialNumber]")]
        public String ServiceUnitSerialNumber
        {
            get { return Fields.ServiceUnitSerialNumber[this]; }
            set { Fields.ServiceUnitSerialNumber[this] = value; }
        }

        [DisplayName("Service Unit Manufacture Year"), Expression("jServiceUnit.[ManufactureYear]")]
        public String ServiceUnitManufactureYear
        {
            get { return Fields.ServiceUnitManufactureYear[this]; }
            set { Fields.ServiceUnitManufactureYear[this] = value; }
        }

        [DisplayName("Service Unit Warranty Number"), Expression("jServiceUnit.[WarrantyNumber]")]
        public String ServiceUnitWarrantyNumber
        {
            get { return Fields.ServiceUnitWarrantyNumber[this]; }
            set { Fields.ServiceUnitWarrantyNumber[this] = value; }
        }

        [DisplayName("Service Unit Remark"), Expression("jServiceUnit.[Remark]")]
        public String ServiceUnitRemark
        {
            get { return Fields.ServiceUnitRemark[this]; }
            set { Fields.ServiceUnitRemark[this] = value; }
        }

        [DisplayName("Service Unit Service Unit Status"), Expression("jServiceUnit.[ServiceUnitStatus]")]
        public String ServiceUnitServiceUnitStatus
        {
            get { return Fields.ServiceUnitServiceUnitStatus[this]; }
            set { Fields.ServiceUnitServiceUnitStatus[this] = value; }
        }

        [DisplayName("Service Unit Hm"), Expression("jServiceUnit.[HM]")]
        public String ServiceUnitHm
        {
            get { return Fields.ServiceUnitHm[this]; }
            set { Fields.ServiceUnitHm[this] = value; }
        }

        [DisplayName("Service Unit Insert User Id"), Expression("jServiceUnit.[InsertUserId]")]
        public Int16? ServiceUnitInsertUserId
        {
            get { return Fields.ServiceUnitInsertUserId[this]; }
            set { Fields.ServiceUnitInsertUserId[this] = value; }
        }

        [DisplayName("Service Unit Insert Date"), Expression("jServiceUnit.[InsertDate]")]
        public DateTime? ServiceUnitInsertDate
        {
            get { return Fields.ServiceUnitInsertDate[this]; }
            set { Fields.ServiceUnitInsertDate[this] = value; }
        }

        [DisplayName("Service Unit Update User Id"), Expression("jServiceUnit.[UpdateUserId]")]
        public Int16? ServiceUnitUpdateUserId
        {
            get { return Fields.ServiceUnitUpdateUserId[this]; }
            set { Fields.ServiceUnitUpdateUserId[this] = value; }
        }

        [DisplayName("Service Unit Update Date"), Expression("jServiceUnit.[UpdateDate]")]
        public DateTime? ServiceUnitUpdateDate
        {
            get { return Fields.ServiceUnitUpdateDate[this]; }
            set { Fields.ServiceUnitUpdateDate[this] = value; }
        }

        [DisplayName("Service Unit Is Active"), Expression("jServiceUnit.[IsActive]")]
        public Int16? ServiceUnitIsActive
        {
            get { return Fields.ServiceUnitIsActive[this]; }
            set { Fields.ServiceUnitIsActive[this] = value; }
        }

        [DisplayName("Service Unit Type Category Unit Id"), Expression("jServiceUnitType.[CategoryUnitID]")]
        public Int32? ServiceUnitTypeCategoryUnitId
        {
            get { return Fields.ServiceUnitTypeCategoryUnitId[this]; }
            set { Fields.ServiceUnitTypeCategoryUnitId[this] = value; }
        }

        [DisplayName("Service Unit Type Product Id"), Expression("jServiceUnitType.[ProductID]")]
        public Int32? ServiceUnitTypeProductId
        {
            get { return Fields.ServiceUnitTypeProductId[this]; }
            set { Fields.ServiceUnitTypeProductId[this] = value; }
        }

        [DisplayName("Service Unit Type Job Code No"), Expression("jServiceUnitType.[JobCodeNo]")]
        public String ServiceUnitTypeJobCodeNo
        {
            get { return Fields.ServiceUnitTypeJobCodeNo[this]; }
            set { Fields.ServiceUnitTypeJobCodeNo[this] = value; }
        }

        [DisplayName("Service Unit Type Description"), Expression("jServiceUnitType.[Description]")]
        public String ServiceUnitTypeDescription
        {
            get { return Fields.ServiceUnitTypeDescription[this]; }
            set { Fields.ServiceUnitTypeDescription[this] = value; }
        }

        [DisplayName("Service Unit Type Charge Per Hour"), Expression("jServiceUnitType.[ChargePerHour]")]
        public Decimal? ServiceUnitTypeChargePerHour
        {
            get { return Fields.ServiceUnitTypeChargePerHour[this]; }
            set { Fields.ServiceUnitTypeChargePerHour[this] = value; }
        }

        [DisplayName("Service Unit Type"), Expression("jServiceUnitType.[ServiceUnitType]")]
        public String ServiceUnitType
        {
            get { return Fields.ServiceUnitType[this]; }
            set { Fields.ServiceUnitType[this] = value; }
        }

        [DisplayName("Service Unit Type Standart Op Time"), Expression("jServiceUnitType.[StandartOpTime]")]
        public Decimal? ServiceUnitTypeStandartOpTime
        {
            get { return Fields.ServiceUnitTypeStandartOpTime[this]; }
            set { Fields.ServiceUnitTypeStandartOpTime[this] = value; }
        }

        [DisplayName("Service Unit Type Continued"), Expression("jServiceUnitType.[Continued]")]
        public Boolean? ServiceUnitTypeContinued
        {
            get { return Fields.ServiceUnitTypeContinued[this]; }
            set { Fields.ServiceUnitTypeContinued[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ServiceUnitDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ServiceBy; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ServiceUnitDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ServiceUnitDetailId;
            public Int32Field ServiceUnitId;
            public Int32Field ServiceUnitTypeId;
            public DecimalField ChargePerHour;
            public Int32Field ServiceHour;
            public DecimalField ServiceCharge;
            public StringField ServiceBy;
            public Int32Field KmInUse;
            public DateTimeField ServiceDate;
            public Int32Field OrderIdService;

            public StringField ServiceUnitServiceUnitNumber;
            public Int32Field ServiceUnitProductId;
            public Int32Field ServiceUnitOrderUnitId;
            public Int32Field ServiceUnitCustomerId;
            public DateTimeField ServiceUnitServiceDate;
            public StringField ServiceUnitServiceBy;
            public StringField ServiceUnitSerialNumber;
            public StringField ServiceUnitManufactureYear;
            public StringField ServiceUnitWarrantyNumber;
            public StringField ServiceUnitRemark;
            public StringField ServiceUnitServiceUnitStatus;
            public StringField ServiceUnitHm;
            public Int16Field ServiceUnitInsertUserId;
            public DateTimeField ServiceUnitInsertDate;
            public Int16Field ServiceUnitUpdateUserId;
            public DateTimeField ServiceUnitUpdateDate;
            public Int16Field ServiceUnitIsActive;

            public Int32Field ServiceUnitTypeCategoryUnitId;
            public Int32Field ServiceUnitTypeProductId;
            public StringField ServiceUnitTypeJobCodeNo;
            public StringField ServiceUnitTypeDescription;
            public DecimalField ServiceUnitTypeChargePerHour;
            public StringField ServiceUnitType;
            public DecimalField ServiceUnitTypeStandartOpTime;
            public BooleanField ServiceUnitTypeContinued;
        }
    }
}
