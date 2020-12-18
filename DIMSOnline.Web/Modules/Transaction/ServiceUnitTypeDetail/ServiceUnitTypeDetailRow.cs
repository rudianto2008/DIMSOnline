
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[ServiceUnitTypeDetail]")]
    [DisplayName("Service Unit Type Detail"), InstanceName("Service Unit Type Detail")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class ServiceUnitTypeDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Service Unit Type Detail Id"), Column("ServiceUnitTypeDetailID"), Identity]
        public Int32? ServiceUnitTypeDetailId
        {
            get { return Fields.ServiceUnitTypeDetailId[this]; }
            set { Fields.ServiceUnitTypeDetailId[this] = value; }
        }

        [DisplayName("Service Unit Id"), Column("ServiceUnitID")]
        public Int32? ServiceUnitId
        {
            get { return Fields.ServiceUnitId[this]; }
            set { Fields.ServiceUnitId[this] = value; }
        }

        [DisplayName("Category Unit Id"), Column("CategoryUnitID")]
        public Int32? CategoryUnitId
        {
            get { return Fields.CategoryUnitId[this]; }
            set { Fields.CategoryUnitId[this] = value; }
        }

        [DisplayName("Job Code No"), Size(20), QuickSearch]
        public String JobCodeNo
        {
            get { return Fields.JobCodeNo[this]; }
            set { Fields.JobCodeNo[this] = value; }
        }

        [DisplayName("Description"), Size(500)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Standart Op Time"), Size(18), Scale(2)]
        public Decimal? StandartOpTime
        {
            get { return Fields.StandartOpTime[this]; }
            set { Fields.StandartOpTime[this] = value; }
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

        [DisplayName("Total Charge"), Size(19), Scale(4)]
        public Decimal? TotalCharge
        {
            get { return Fields.TotalCharge[this]; }
            set { Fields.TotalCharge[this] = value; }
        }

        [DisplayName("Service Unit Type"), Column("ServiceUnitTypeID"), ForeignKey("[dbo].[ServiceUnitType]", "ServiceUnitTypeID"), LeftJoin("jServiceUnitType"), TextualField("ServiceUnitTypeJobCodeNo")]
        public Int32? ServiceUnitTypeId
        {
            get { return Fields.ServiceUnitTypeId[this]; }
            set { Fields.ServiceUnitTypeId[this] = value; }
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
            get { return Fields.ServiceUnitTypeDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.JobCodeNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ServiceUnitTypeDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ServiceUnitTypeDetailId;
            public Int32Field ServiceUnitId;
            public Int32Field CategoryUnitId;
            public StringField JobCodeNo;
            public StringField Description;
            public DecimalField StandartOpTime;
            public DecimalField ChargePerHour;
            public Int32Field ServiceHour;
            public DecimalField TotalCharge;
            public Int32Field ServiceUnitTypeId;

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
