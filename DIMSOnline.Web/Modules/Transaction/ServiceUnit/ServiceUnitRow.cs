
namespace DIMSOnline.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transaction"), TableName("[dbo].[ServiceUnit]")]
    [DisplayName("Service Unit"), InstanceName("Service Unit")]
    [ReadPermission(PermissionKeys.Transaction)]
    [ModifyPermission(PermissionKeys.Transaction)]
    public sealed class ServiceUnitRow : Row, IIdRow, INameRow
    {
        [DisplayName("Service Unit Id"), Column("ServiceUnitID"), Identity]
        public Int32? ServiceUnitId
        {
            get { return Fields.ServiceUnitId[this]; }
            set { Fields.ServiceUnitId[this] = value; }
        }

        [DisplayName("Service Unit Number"), Size(50), QuickSearch]
        public String ServiceUnitNumber
        {
            get { return Fields.ServiceUnitNumber[this]; }
            set { Fields.ServiceUnitNumber[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductNumber")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Order Unit"), Column("OrderUnitID"), ForeignKey("[dbo].[Orders]", "OrderID"), LeftJoin("jOrderUnit"), TextualField("OrderUnitOrderNumber")]
        public Int32? OrderUnitId
        {
            get { return Fields.OrderUnitId[this]; }
            set { Fields.OrderUnitId[this] = value; }
        }

        [DisplayName("Customer"), Column("CustomerID"), ForeignKey("[dbo].[Customer]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerCustomerNumber")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Service Date")]
        public DateTime? ServiceDate
        {
            get { return Fields.ServiceDate[this]; }
            set { Fields.ServiceDate[this] = value; }
        }

        [DisplayName("Service By"), Size(50)]
        public String ServiceBy
        {
            get { return Fields.ServiceBy[this]; }
            set { Fields.ServiceBy[this] = value; }
        }

        [DisplayName("Serial Number"), Size(50)]
        public String SerialNumber
        {
            get { return Fields.SerialNumber[this]; }
            set { Fields.SerialNumber[this] = value; }
        }

        [DisplayName("Manufacture Year"), Size(10)]
        public String ManufactureYear
        {
            get { return Fields.ManufactureYear[this]; }
            set { Fields.ManufactureYear[this] = value; }
        }

        [DisplayName("Warranty Number"), Size(10)]
        public String WarrantyNumber
        {
            get { return Fields.WarrantyNumber[this]; }
            set { Fields.WarrantyNumber[this] = value; }
        }

        [DisplayName("Remark"), Size(500)]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }

        [DisplayName("Service Unit Status"), Size(20)]
        public String ServiceUnitStatus
        {
            get { return Fields.ServiceUnitStatus[this]; }
            set { Fields.ServiceUnitStatus[this] = value; }
        }

        [DisplayName("Hm"), Column("HM"), Size(10)]
        public String Hm
        {
            get { return Fields.Hm[this]; }
            set { Fields.Hm[this] = value; }
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

        [DisplayName("Product Product Number"), Expression("jProduct.[ProductNumber]")]
        public String ProductProductNumber
        {
            get { return Fields.ProductProductNumber[this]; }
            set { Fields.ProductProductNumber[this] = value; }
        }

        [DisplayName("Product Model Name"), Expression("jProduct.[ModelName]")]
        public String ProductModelName
        {
            get { return Fields.ProductModelName[this]; }
            set { Fields.ProductModelName[this] = value; }
        }

        [DisplayName("Product Category Unit Id"), Expression("jProduct.[CategoryUnitID]")]
        public Int32? ProductCategoryUnitId
        {
            get { return Fields.ProductCategoryUnitId[this]; }
            set { Fields.ProductCategoryUnitId[this] = value; }
        }

        [DisplayName("Product Unit Stock Id"), Expression("jProduct.[UnitStockID]")]
        public Int32? ProductUnitStockId
        {
            get { return Fields.ProductUnitStockId[this]; }
            set { Fields.ProductUnitStockId[this] = value; }
        }

        [DisplayName("Product Part Number"), Expression("jProduct.[PartNumber]")]
        public String ProductPartNumber
        {
            get { return Fields.ProductPartNumber[this]; }
            set { Fields.ProductPartNumber[this] = value; }
        }

        [DisplayName("Product Product Type Id"), Expression("jProduct.[ProductTypeID]")]
        public Int32? ProductProductTypeId
        {
            get { return Fields.ProductProductTypeId[this]; }
            set { Fields.ProductProductTypeId[this] = value; }
        }

        [DisplayName("Product Minimum Stock"), Expression("jProduct.[MinimumStock]")]
        public Int32? ProductMinimumStock
        {
            get { return Fields.ProductMinimumStock[this]; }
            set { Fields.ProductMinimumStock[this] = value; }
        }

        [DisplayName("Product Continued"), Expression("jProduct.[Continued]")]
        public Boolean? ProductContinued
        {
            get { return Fields.ProductContinued[this]; }
            set { Fields.ProductContinued[this] = value; }
        }

        [DisplayName("Product Product Image"), Expression("jProduct.[ProductImage]")]
        public String ProductProductImage
        {
            get { return Fields.ProductProductImage[this]; }
            set { Fields.ProductProductImage[this] = value; }
        }

        [DisplayName("Product Description"), Expression("jProduct.[Description]")]
        public String ProductDescription
        {
            get { return Fields.ProductDescription[this]; }
            set { Fields.ProductDescription[this] = value; }
        }

        [DisplayName("Product Bin Location Id"), Expression("jProduct.[BinLocationID]")]
        public Int32? ProductBinLocationId
        {
            get { return Fields.ProductBinLocationId[this]; }
            set { Fields.ProductBinLocationId[this] = value; }
        }

        [DisplayName("Product Insert User Id"), Expression("jProduct.[InsertUserId]")]
        public Int16? ProductInsertUserId
        {
            get { return Fields.ProductInsertUserId[this]; }
            set { Fields.ProductInsertUserId[this] = value; }
        }

        [DisplayName("Product Insert Date"), Expression("jProduct.[InsertDate]")]
        public DateTime? ProductInsertDate
        {
            get { return Fields.ProductInsertDate[this]; }
            set { Fields.ProductInsertDate[this] = value; }
        }

        [DisplayName("Product Update User Id"), Expression("jProduct.[UpdateUserId]")]
        public Int16? ProductUpdateUserId
        {
            get { return Fields.ProductUpdateUserId[this]; }
            set { Fields.ProductUpdateUserId[this] = value; }
        }

        [DisplayName("Product Update Date"), Expression("jProduct.[UpdateDate]")]
        public DateTime? ProductUpdateDate
        {
            get { return Fields.ProductUpdateDate[this]; }
            set { Fields.ProductUpdateDate[this] = value; }
        }

        [DisplayName("Product Is Active"), Expression("jProduct.[IsActive]")]
        public Int16? ProductIsActive
        {
            get { return Fields.ProductIsActive[this]; }
            set { Fields.ProductIsActive[this] = value; }
        }

        [DisplayName("Product Stock Quantity"), Expression("jProduct.[StockQuantity]")]
        public Int32? ProductStockQuantity
        {
            get { return Fields.ProductStockQuantity[this]; }
            set { Fields.ProductStockQuantity[this] = value; }
        }

        [DisplayName("Order Unit Order Number"), Expression("jOrderUnit.[OrderNumber]")]
        public String OrderUnitOrderNumber
        {
            get { return Fields.OrderUnitOrderNumber[this]; }
            set { Fields.OrderUnitOrderNumber[this] = value; }
        }

        [DisplayName("Order Unit Order Date"), Expression("jOrderUnit.[OrderDate]")]
        public DateTime? OrderUnitOrderDate
        {
            get { return Fields.OrderUnitOrderDate[this]; }
            set { Fields.OrderUnitOrderDate[this] = value; }
        }

        [DisplayName("Order Unit Customer Id"), Expression("jOrderUnit.[CustomerID]")]
        public Int32? OrderUnitCustomerId
        {
            get { return Fields.OrderUnitCustomerId[this]; }
            set { Fields.OrderUnitCustomerId[this] = value; }
        }

        [DisplayName("Order Unit User Id"), Expression("jOrderUnit.[UserID]")]
        public Int32? OrderUnitUserId
        {
            get { return Fields.OrderUnitUserId[this]; }
            set { Fields.OrderUnitUserId[this] = value; }
        }

        [DisplayName("Order Unit Product Type Id"), Expression("jOrderUnit.[ProductTypeID]")]
        public Int32? OrderUnitProductTypeId
        {
            get { return Fields.OrderUnitProductTypeId[this]; }
            set { Fields.OrderUnitProductTypeId[this] = value; }
        }

        [DisplayName("Order Unit Km In Use"), Expression("jOrderUnit.[KmInUse]")]
        public Int16? OrderUnitKmInUse
        {
            get { return Fields.OrderUnitKmInUse[this]; }
            set { Fields.OrderUnitKmInUse[this] = value; }
        }

        [DisplayName("Order Unit Payment Service"), Expression("jOrderUnit.[PaymentService]")]
        public Decimal? OrderUnitPaymentService
        {
            get { return Fields.OrderUnitPaymentService[this]; }
            set { Fields.OrderUnitPaymentService[this] = value; }
        }

        [DisplayName("Order Unit Order Status"), Expression("jOrderUnit.[OrderStatus]")]
        public String OrderUnitOrderStatus
        {
            get { return Fields.OrderUnitOrderStatus[this]; }
            set { Fields.OrderUnitOrderStatus[this] = value; }
        }

        [DisplayName("Order Unit Insert User Id"), Expression("jOrderUnit.[InsertUserId]")]
        public Int16? OrderUnitInsertUserId
        {
            get { return Fields.OrderUnitInsertUserId[this]; }
            set { Fields.OrderUnitInsertUserId[this] = value; }
        }

        [DisplayName("Order Unit Insert Date"), Expression("jOrderUnit.[InsertDate]")]
        public DateTime? OrderUnitInsertDate
        {
            get { return Fields.OrderUnitInsertDate[this]; }
            set { Fields.OrderUnitInsertDate[this] = value; }
        }

        [DisplayName("Order Unit Update User Id"), Expression("jOrderUnit.[UpdateUserId]")]
        public Int16? OrderUnitUpdateUserId
        {
            get { return Fields.OrderUnitUpdateUserId[this]; }
            set { Fields.OrderUnitUpdateUserId[this] = value; }
        }

        [DisplayName("Order Unit Update Date"), Expression("jOrderUnit.[UpdateDate]")]
        public DateTime? OrderUnitUpdateDate
        {
            get { return Fields.OrderUnitUpdateDate[this]; }
            set { Fields.OrderUnitUpdateDate[this] = value; }
        }

        [DisplayName("Order Unit Is Active"), Expression("jOrderUnit.[IsActive]")]
        public Int16? OrderUnitIsActive
        {
            get { return Fields.OrderUnitIsActive[this]; }
            set { Fields.OrderUnitIsActive[this] = value; }
        }

        [DisplayName("Order Unit Company Id"), Expression("jOrderUnit.[CompanyId]")]
        public Int32? OrderUnitCompanyId
        {
            get { return Fields.OrderUnitCompanyId[this]; }
            set { Fields.OrderUnitCompanyId[this] = value; }
        }

        [DisplayName("Customer Customer Number"), Expression("jCustomer.[CustomerNumber]")]
        public String CustomerCustomerNumber
        {
            get { return Fields.CustomerCustomerNumber[this]; }
            set { Fields.CustomerCustomerNumber[this] = value; }
        }

        [DisplayName("Customer Company Id"), Expression("jCustomer.[CompanyID]")]
        public Int32? CustomerCompanyId
        {
            get { return Fields.CustomerCompanyId[this]; }
            set { Fields.CustomerCompanyId[this] = value; }
        }

        [DisplayName("Customer Customer Name"), Expression("jCustomer.[CustomerName]")]
        public String CustomerCustomerName
        {
            get { return Fields.CustomerCustomerName[this]; }
            set { Fields.CustomerCustomerName[this] = value; }
        }

        [DisplayName("Customer Province Id"), Expression("jCustomer.[ProvinceID]")]
        public Int32? CustomerProvinceId
        {
            get { return Fields.CustomerProvinceId[this]; }
            set { Fields.CustomerProvinceId[this] = value; }
        }

        [DisplayName("Customer City Id"), Expression("jCustomer.[CityID]")]
        public Int32? CustomerCityId
        {
            get { return Fields.CustomerCityId[this]; }
            set { Fields.CustomerCityId[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer Pic"), Expression("jCustomer.[PIC]")]
        public String CustomerPic
        {
            get { return Fields.CustomerPic[this]; }
            set { Fields.CustomerPic[this] = value; }
        }

        [DisplayName("Customer Island Id"), Expression("jCustomer.[IslandID]")]
        public Int32? CustomerIslandId
        {
            get { return Fields.CustomerIslandId[this]; }
            set { Fields.CustomerIslandId[this] = value; }
        }

        [DisplayName("Customer Post Code"), Expression("jCustomer.[PostCode]")]
        public Int32? CustomerPostCode
        {
            get { return Fields.CustomerPostCode[this]; }
            set { Fields.CustomerPostCode[this] = value; }
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        [DisplayName("Customer Contact Person"), Expression("jCustomer.[ContactPerson]")]
        public String CustomerContactPerson
        {
            get { return Fields.CustomerContactPerson[this]; }
            set { Fields.CustomerContactPerson[this] = value; }
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public String CustomerFax
        {
            get { return Fields.CustomerFax[this]; }
            set { Fields.CustomerFax[this] = value; }
        }

        [DisplayName("Customer Birth Place"), Expression("jCustomer.[BirthPlace]")]
        public String CustomerBirthPlace
        {
            get { return Fields.CustomerBirthPlace[this]; }
            set { Fields.CustomerBirthPlace[this] = value; }
        }

        [DisplayName("Customer Birth Date"), Expression("jCustomer.[BirthDate]")]
        public DateTime? CustomerBirthDate
        {
            get { return Fields.CustomerBirthDate[this]; }
            set { Fields.CustomerBirthDate[this] = value; }
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get { return Fields.CustomerEmail[this]; }
            set { Fields.CustomerEmail[this] = value; }
        }

        [DisplayName("Customer Npwp"), Expression("jCustomer.[NPWP]")]
        public String CustomerNpwp
        {
            get { return Fields.CustomerNpwp[this]; }
            set { Fields.CustomerNpwp[this] = value; }
        }

        [DisplayName("Customer Insert User Id"), Expression("jCustomer.[InsertUserId]")]
        public Int16? CustomerInsertUserId
        {
            get { return Fields.CustomerInsertUserId[this]; }
            set { Fields.CustomerInsertUserId[this] = value; }
        }

        [DisplayName("Customer Insert Date"), Expression("jCustomer.[InsertDate]")]
        public DateTime? CustomerInsertDate
        {
            get { return Fields.CustomerInsertDate[this]; }
            set { Fields.CustomerInsertDate[this] = value; }
        }

        [DisplayName("Customer Update User Id"), Expression("jCustomer.[UpdateUserId]")]
        public Int16? CustomerUpdateUserId
        {
            get { return Fields.CustomerUpdateUserId[this]; }
            set { Fields.CustomerUpdateUserId[this] = value; }
        }

        [DisplayName("Customer Update Date"), Expression("jCustomer.[UpdateDate]")]
        public DateTime? CustomerUpdateDate
        {
            get { return Fields.CustomerUpdateDate[this]; }
            set { Fields.CustomerUpdateDate[this] = value; }
        }

        [DisplayName("Customer Is Active"), Expression("jCustomer.[IsActive]")]
        public Int16? CustomerIsActive
        {
            get { return Fields.CustomerIsActive[this]; }
            set { Fields.CustomerIsActive[this] = value; }
        }

        [DisplayName("Customer Delete User Id"), Expression("jCustomer.[DeleteUserId]")]
        public Int16? CustomerDeleteUserId
        {
            get { return Fields.CustomerDeleteUserId[this]; }
            set { Fields.CustomerDeleteUserId[this] = value; }
        }

        [DisplayName("Customer Delete Date"), Expression("jCustomer.[DeleteDate]")]
        public DateTime? CustomerDeleteDate
        {
            get { return Fields.CustomerDeleteDate[this]; }
            set { Fields.CustomerDeleteDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ServiceUnitId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ServiceUnitNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ServiceUnitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ServiceUnitId;
            public StringField ServiceUnitNumber;
            public Int32Field ProductId;
            public Int32Field OrderUnitId;
            public Int32Field CustomerId;
            public DateTimeField ServiceDate;
            public StringField ServiceBy;
            public StringField SerialNumber;
            public StringField ManufactureYear;
            public StringField WarrantyNumber;
            public StringField Remark;
            public StringField ServiceUnitStatus;
            public StringField Hm;
            public Int16Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;

            public StringField ProductProductNumber;
            public StringField ProductModelName;
            public Int32Field ProductCategoryUnitId;
            public Int32Field ProductUnitStockId;
            public StringField ProductPartNumber;
            public Int32Field ProductProductTypeId;
            public Int32Field ProductMinimumStock;
            public BooleanField ProductContinued;
            public StringField ProductProductImage;
            public StringField ProductDescription;
            public Int32Field ProductBinLocationId;
            public Int16Field ProductInsertUserId;
            public DateTimeField ProductInsertDate;
            public Int16Field ProductUpdateUserId;
            public DateTimeField ProductUpdateDate;
            public Int16Field ProductIsActive;
            public Int32Field ProductStockQuantity;

            public StringField OrderUnitOrderNumber;
            public DateTimeField OrderUnitOrderDate;
            public Int32Field OrderUnitCustomerId;
            public Int32Field OrderUnitUserId;
            public Int32Field OrderUnitProductTypeId;
            public Int16Field OrderUnitKmInUse;
            public DecimalField OrderUnitPaymentService;
            public StringField OrderUnitOrderStatus;
            public Int16Field OrderUnitInsertUserId;
            public DateTimeField OrderUnitInsertDate;
            public Int16Field OrderUnitUpdateUserId;
            public DateTimeField OrderUnitUpdateDate;
            public Int16Field OrderUnitIsActive;
            public Int32Field OrderUnitCompanyId;

            public StringField CustomerCustomerNumber;
            public Int32Field CustomerCompanyId;
            public StringField CustomerCustomerName;
            public Int32Field CustomerProvinceId;
            public Int32Field CustomerCityId;
            public StringField CustomerAddress;
            public StringField CustomerPic;
            public Int32Field CustomerIslandId;
            public Int32Field CustomerPostCode;
            public StringField CustomerPhone;
            public StringField CustomerContactPerson;
            public StringField CustomerFax;
            public StringField CustomerBirthPlace;
            public DateTimeField CustomerBirthDate;
            public StringField CustomerEmail;
            public StringField CustomerNpwp;
            public Int16Field CustomerInsertUserId;
            public DateTimeField CustomerInsertDate;
            public Int16Field CustomerUpdateUserId;
            public DateTimeField CustomerUpdateDate;
            public Int16Field CustomerIsActive;
            public Int16Field CustomerDeleteUserId;
            public DateTimeField CustomerDeleteDate;
        }
    }
}
