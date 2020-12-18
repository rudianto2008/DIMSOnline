namespace DIMSOnline.Transaction {
    export interface ReceiveOrderDetailRow {
        ReceiveOrderDetailId?: number;
        ReceiveOrderId?: number;
        ProductId?: number;
        PoQty?: number;
        ReceiveQty?: number;
        BackOrderQty?: number;
        Price?: number;
        ReceiveComplete?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        ReceiveOrderProductTypeId?: number;
        ReceiveOrderReceiveOrderNumber?: string;
        ReceiveOrderPurchaseOrderId?: number;
        ReceiveOrderReceiveDate?: string;
        ReceiveOrderReceiveBy?: string;
        ReceiveOrderAcknowledgeBy?: string;
        ReceiveOrderReceiveOrderStatus?: string;
        ReceiveOrderInsertUserId?: number;
        ReceiveOrderInsertDate?: string;
        ReceiveOrderUpdateUserId?: number;
        ReceiveOrderUpdateDate?: string;
        ReceiveOrderIsActive?: number;
        ReceiveOrderCompanyId?: number;
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
    }

    export namespace ReceiveOrderDetailRow {
        export const idProperty = 'ReceiveOrderDetailId';
        export const localTextPrefix = 'Transaction.ReceiveOrderDetail';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            ReceiveOrderDetailId = "ReceiveOrderDetailId",
            ReceiveOrderId = "ReceiveOrderId",
            ProductId = "ProductId",
            PoQty = "PoQty",
            ReceiveQty = "ReceiveQty",
            BackOrderQty = "BackOrderQty",
            Price = "Price",
            ReceiveComplete = "ReceiveComplete",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            ReceiveOrderProductTypeId = "ReceiveOrderProductTypeId",
            ReceiveOrderReceiveOrderNumber = "ReceiveOrderReceiveOrderNumber",
            ReceiveOrderPurchaseOrderId = "ReceiveOrderPurchaseOrderId",
            ReceiveOrderReceiveDate = "ReceiveOrderReceiveDate",
            ReceiveOrderReceiveBy = "ReceiveOrderReceiveBy",
            ReceiveOrderAcknowledgeBy = "ReceiveOrderAcknowledgeBy",
            ReceiveOrderReceiveOrderStatus = "ReceiveOrderReceiveOrderStatus",
            ReceiveOrderInsertUserId = "ReceiveOrderInsertUserId",
            ReceiveOrderInsertDate = "ReceiveOrderInsertDate",
            ReceiveOrderUpdateUserId = "ReceiveOrderUpdateUserId",
            ReceiveOrderUpdateDate = "ReceiveOrderUpdateDate",
            ReceiveOrderIsActive = "ReceiveOrderIsActive",
            ReceiveOrderCompanyId = "ReceiveOrderCompanyId",
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
            ProductStockQuantity = "ProductStockQuantity"
        }
    }
}

