namespace DIMSOnline.Transaction {
    export interface ReceiveOrderRow {
        ReceiveOrderId?: number;
        ProductTypeId?: number;
        ReceiveOrderNumber?: string;
        PurchaseOrderId?: number;
        ReceiveDate?: string;
        ReceiveBy?: string;
        AcknowledgeBy?: string;
        ReceiveOrderStatus?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        CompanyId?: number;
        PurchaseOrderPurchaseOrderNumber?: string;
        PurchaseOrderCompanyId?: number;
        PurchaseOrderPurchaseOrderDate?: string;
        PurchaseOrderOrderCategoryId?: number;
        PurchaseOrderProductTypeId?: number;
        PurchaseOrderPickupPoint?: string;
        PurchaseOrderPurchaseOrderStatus?: string;
        PurchaseOrderInsertUserId?: number;
        PurchaseOrderInsertDate?: string;
        PurchaseOrderUpdateUserId?: number;
        PurchaseOrderUpdateDate?: string;
        PurchaseOrderIsActive?: number;
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

    export namespace ReceiveOrderRow {
        export const idProperty = 'ReceiveOrderId';
        export const nameProperty = 'ReceiveOrderNumber';
        export const localTextPrefix = 'Transaction.ReceiveOrder';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            ReceiveOrderId = "ReceiveOrderId",
            ProductTypeId = "ProductTypeId",
            ReceiveOrderNumber = "ReceiveOrderNumber",
            PurchaseOrderId = "PurchaseOrderId",
            ReceiveDate = "ReceiveDate",
            ReceiveBy = "ReceiveBy",
            AcknowledgeBy = "AcknowledgeBy",
            ReceiveOrderStatus = "ReceiveOrderStatus",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            CompanyId = "CompanyId",
            PurchaseOrderPurchaseOrderNumber = "PurchaseOrderPurchaseOrderNumber",
            PurchaseOrderCompanyId = "PurchaseOrderCompanyId",
            PurchaseOrderPurchaseOrderDate = "PurchaseOrderPurchaseOrderDate",
            PurchaseOrderOrderCategoryId = "PurchaseOrderOrderCategoryId",
            PurchaseOrderProductTypeId = "PurchaseOrderProductTypeId",
            PurchaseOrderPickupPoint = "PurchaseOrderPickupPoint",
            PurchaseOrderPurchaseOrderStatus = "PurchaseOrderPurchaseOrderStatus",
            PurchaseOrderInsertUserId = "PurchaseOrderInsertUserId",
            PurchaseOrderInsertDate = "PurchaseOrderInsertDate",
            PurchaseOrderUpdateUserId = "PurchaseOrderUpdateUserId",
            PurchaseOrderUpdateDate = "PurchaseOrderUpdateDate",
            PurchaseOrderIsActive = "PurchaseOrderIsActive",
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

