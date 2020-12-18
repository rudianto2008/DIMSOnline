namespace DIMSOnline.Transaction {
    export interface OrdersRow {
        OrderId?: number;
        OrderNumber?: string;
        OrderDate?: string;
        CustomerId?: number;
        UserId?: number;
        ProductTypeId?: number;
        KmInUse?: number;
        PaymentService?: number;
        OrderStatus?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        CompanyId?: number;
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
        CompanyCompanyName?: string;
        CompanyAddress?: string;
        CompanyFax?: string;
        CompanyLogo?: string;
        CompanyPhone?: string;
        CompanyContactPerson?: string;
        CompanyIslandId?: number;
        CompanyProvinceId?: number;
        CompanyCityId?: number;
        CompanyOfficeType?: string;
        CompanyInsertUserId?: number;
        CompanyInsertDate?: string;
        CompanyUpdateUserId?: number;
        CompanyUpdateDate?: string;
        CompanyDeleteUserId?: number;
        CompanyDeleteDate?: string;
        CompanyIsActive?: number;
    }

    export namespace OrdersRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'OrderNumber';
        export const localTextPrefix = 'Transaction.Orders';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            OrderId = "OrderId",
            OrderNumber = "OrderNumber",
            OrderDate = "OrderDate",
            CustomerId = "CustomerId",
            UserId = "UserId",
            ProductTypeId = "ProductTypeId",
            KmInUse = "KmInUse",
            PaymentService = "PaymentService",
            OrderStatus = "OrderStatus",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            CompanyId = "CompanyId",
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
            CustomerDeleteDate = "CustomerDeleteDate",
            CompanyCompanyName = "CompanyCompanyName",
            CompanyAddress = "CompanyAddress",
            CompanyFax = "CompanyFax",
            CompanyLogo = "CompanyLogo",
            CompanyPhone = "CompanyPhone",
            CompanyContactPerson = "CompanyContactPerson",
            CompanyIslandId = "CompanyIslandId",
            CompanyProvinceId = "CompanyProvinceId",
            CompanyCityId = "CompanyCityId",
            CompanyOfficeType = "CompanyOfficeType",
            CompanyInsertUserId = "CompanyInsertUserId",
            CompanyInsertDate = "CompanyInsertDate",
            CompanyUpdateUserId = "CompanyUpdateUserId",
            CompanyUpdateDate = "CompanyUpdateDate",
            CompanyDeleteUserId = "CompanyDeleteUserId",
            CompanyDeleteDate = "CompanyDeleteDate",
            CompanyIsActive = "CompanyIsActive"
        }
    }
}

