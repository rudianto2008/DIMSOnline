namespace DIMSOnline.Transaction {
    export interface PurchaseOrderRow {
        PurchaseOrderId?: number;
        PurchaseOrderNumber?: string;
        CompanyId?: number;
        PurchaseOrderDate?: string;
        OrderCategoryId?: number;
        ProductTypeId?: number;
        PickupPoint?: string;
        PurchaseOrderStatus?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
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
        ProductTypeProductTypeName?: string;
        ProductTypeInsertUserId?: number;
        ProductTypeInsertDate?: string;
        ProductTypeUpdateUserId?: number;
        ProductTypeUpdateDate?: string;
        ProductTypeIsActive?: number;
    }

    export namespace PurchaseOrderRow {
        export const idProperty = 'PurchaseOrderId';
        export const nameProperty = 'PurchaseOrderNumber';
        export const localTextPrefix = 'Transaction.PurchaseOrder';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            PurchaseOrderId = "PurchaseOrderId",
            PurchaseOrderNumber = "PurchaseOrderNumber",
            CompanyId = "CompanyId",
            PurchaseOrderDate = "PurchaseOrderDate",
            OrderCategoryId = "OrderCategoryId",
            ProductTypeId = "ProductTypeId",
            PickupPoint = "PickupPoint",
            PurchaseOrderStatus = "PurchaseOrderStatus",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
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
            CompanyIsActive = "CompanyIsActive",
            ProductTypeProductTypeName = "ProductTypeProductTypeName",
            ProductTypeInsertUserId = "ProductTypeInsertUserId",
            ProductTypeInsertDate = "ProductTypeInsertDate",
            ProductTypeUpdateUserId = "ProductTypeUpdateUserId",
            ProductTypeUpdateDate = "ProductTypeUpdateDate",
            ProductTypeIsActive = "ProductTypeIsActive"
        }
    }
}

