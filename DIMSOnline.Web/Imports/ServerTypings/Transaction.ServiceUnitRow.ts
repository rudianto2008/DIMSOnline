namespace DIMSOnline.Transaction {
    export interface ServiceUnitRow {
        ServiceUnitId?: number;
        ServiceUnitNumber?: string;
        ProductId?: number;
        OrderUnitId?: number;
        CustomerId?: number;
        ServiceDate?: string;
        ServiceBy?: string;
        SerialNumber?: string;
        ManufactureYear?: string;
        WarrantyNumber?: string;
        Remark?: string;
        ServiceUnitStatus?: string;
        Hm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        ProductProductNumber?: string;
        ProductModelName?: string;
        ProductCategoryUnitId?: number;
        ProductUnitStockId?: number;
        ProductPartNumber?: string;
        ProductProductTypeId?: number;
        ProductMinimumStock?: number;
        ProductContinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocationId?: number;
        ProductInsertUserId?: number;
        ProductInsertDate?: string;
        ProductUpdateUserId?: number;
        ProductUpdateDate?: string;
        ProductIsActive?: number;
        ProductStockQuantity?: number;
        OrderUnitOrderNumber?: string;
        OrderUnitOrderDate?: string;
        OrderUnitCustomerId?: number;
        OrderUnitUserId?: number;
        OrderUnitProductTypeId?: number;
        OrderUnitKmInUse?: number;
        OrderUnitPaymentService?: number;
        OrderUnitOrderStatus?: string;
        OrderUnitInsertUserId?: number;
        OrderUnitInsertDate?: string;
        OrderUnitUpdateUserId?: number;
        OrderUnitUpdateDate?: string;
        OrderUnitIsActive?: number;
        OrderUnitCompanyId?: number;
        CustomerCustomerNumber?: string;
        CustomerCompanyId?: number;
        CustomerCustomerName?: string;
        CustomerProvinceId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerPic?: string;
        CustomerIslandId?: number;
        CustomerPostCode?: number;
        CustomerPhone?: string;
        CustomerContactPerson?: string;
        CustomerFax?: string;
        CustomerBirthPlace?: string;
        CustomerBirthDate?: string;
        CustomerEmail?: string;
        CustomerNpwp?: string;
        CustomerInsertUserId?: number;
        CustomerInsertDate?: string;
        CustomerUpdateUserId?: number;
        CustomerUpdateDate?: string;
        CustomerIsActive?: number;
        CustomerDeleteUserId?: number;
        CustomerDeleteDate?: string;
    }

    export namespace ServiceUnitRow {
        export const idProperty = 'ServiceUnitId';
        export const nameProperty = 'ServiceUnitNumber';
        export const localTextPrefix = 'Transaction.ServiceUnit';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            ServiceUnitId = "ServiceUnitId",
            ServiceUnitNumber = "ServiceUnitNumber",
            ProductId = "ProductId",
            OrderUnitId = "OrderUnitId",
            CustomerId = "CustomerId",
            ServiceDate = "ServiceDate",
            ServiceBy = "ServiceBy",
            SerialNumber = "SerialNumber",
            ManufactureYear = "ManufactureYear",
            WarrantyNumber = "WarrantyNumber",
            Remark = "Remark",
            ServiceUnitStatus = "ServiceUnitStatus",
            Hm = "Hm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            ProductProductNumber = "ProductProductNumber",
            ProductModelName = "ProductModelName",
            ProductCategoryUnitId = "ProductCategoryUnitId",
            ProductUnitStockId = "ProductUnitStockId",
            ProductPartNumber = "ProductPartNumber",
            ProductProductTypeId = "ProductProductTypeId",
            ProductMinimumStock = "ProductMinimumStock",
            ProductContinued = "ProductContinued",
            ProductProductImage = "ProductProductImage",
            ProductDescription = "ProductDescription",
            ProductBinLocationId = "ProductBinLocationId",
            ProductInsertUserId = "ProductInsertUserId",
            ProductInsertDate = "ProductInsertDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductIsActive = "ProductIsActive",
            ProductStockQuantity = "ProductStockQuantity",
            OrderUnitOrderNumber = "OrderUnitOrderNumber",
            OrderUnitOrderDate = "OrderUnitOrderDate",
            OrderUnitCustomerId = "OrderUnitCustomerId",
            OrderUnitUserId = "OrderUnitUserId",
            OrderUnitProductTypeId = "OrderUnitProductTypeId",
            OrderUnitKmInUse = "OrderUnitKmInUse",
            OrderUnitPaymentService = "OrderUnitPaymentService",
            OrderUnitOrderStatus = "OrderUnitOrderStatus",
            OrderUnitInsertUserId = "OrderUnitInsertUserId",
            OrderUnitInsertDate = "OrderUnitInsertDate",
            OrderUnitUpdateUserId = "OrderUnitUpdateUserId",
            OrderUnitUpdateDate = "OrderUnitUpdateDate",
            OrderUnitIsActive = "OrderUnitIsActive",
            OrderUnitCompanyId = "OrderUnitCompanyId",
            CustomerCustomerNumber = "CustomerCustomerNumber",
            CustomerCompanyId = "CustomerCompanyId",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerProvinceId = "CustomerProvinceId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerPic = "CustomerPic",
            CustomerIslandId = "CustomerIslandId",
            CustomerPostCode = "CustomerPostCode",
            CustomerPhone = "CustomerPhone",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerFax = "CustomerFax",
            CustomerBirthPlace = "CustomerBirthPlace",
            CustomerBirthDate = "CustomerBirthDate",
            CustomerEmail = "CustomerEmail",
            CustomerNpwp = "CustomerNpwp",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerIsActive = "CustomerIsActive",
            CustomerDeleteUserId = "CustomerDeleteUserId",
            CustomerDeleteDate = "CustomerDeleteDate"
        }
    }
}

