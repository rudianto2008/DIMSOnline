namespace DIMSOnline.Transaction {
    export interface PurchaseOrderDetailRow {
        PurchaseOrderDetailId?: number;
        PurchaseOrderId?: number;
        ProductId?: number;
        Quantity?: number;
        ProductPriceId?: number;
        ProductPriceNumber?: string;
        Price?: number;
        GrossAmount?: number;
        Ppn?: number;
        Total?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        ReceiveOrderDetailId?: number;
        ReceiveQty?: number;
        BackOrderQty?: number;
        CancellationDate?: string;
        CancellationBy?: number;
        DiscountRequest?: number;
        SupportingDocumentDiscount?: string;
        ApprovalStatusDiscount?: string;
        CommentDiscount?: string;
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
        ProductPriceProductPriceNumber?: string;
        ProductPriceProductId?: number;
        ProductPriceOrderCategoryId?: number;
        ProductPricePrice?: number;
        ProductPriceContinued?: boolean;
        ProductPriceInsertUserId?: number;
        ProductPriceInsertDate?: string;
        ProductPriceUpdateUserId?: number;
        ProductPriceUpdateDate?: string;
        ProductPriceIsActive?: number;
    }

    export namespace PurchaseOrderDetailRow {
        export const idProperty = 'PurchaseOrderDetailId';
        export const nameProperty = 'ProductPriceNumber';
        export const localTextPrefix = 'Transaction.PurchaseOrderDetail';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            PurchaseOrderDetailId = "PurchaseOrderDetailId",
            PurchaseOrderId = "PurchaseOrderId",
            ProductId = "ProductId",
            Quantity = "Quantity",
            ProductPriceId = "ProductPriceId",
            ProductPriceNumber = "ProductPriceNumber",
            Price = "Price",
            GrossAmount = "GrossAmount",
            Ppn = "Ppn",
            Total = "Total",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            ReceiveOrderDetailId = "ReceiveOrderDetailId",
            ReceiveQty = "ReceiveQty",
            BackOrderQty = "BackOrderQty",
            CancellationDate = "CancellationDate",
            CancellationBy = "CancellationBy",
            DiscountRequest = "DiscountRequest",
            SupportingDocumentDiscount = "SupportingDocumentDiscount",
            ApprovalStatusDiscount = "ApprovalStatusDiscount",
            CommentDiscount = "CommentDiscount",
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
            ProductPriceProductPriceNumber = "ProductPriceProductPriceNumber",
            ProductPriceProductId = "ProductPriceProductId",
            ProductPriceOrderCategoryId = "ProductPriceOrderCategoryId",
            ProductPricePrice = "ProductPricePrice",
            ProductPriceContinued = "ProductPriceContinued",
            ProductPriceInsertUserId = "ProductPriceInsertUserId",
            ProductPriceInsertDate = "ProductPriceInsertDate",
            ProductPriceUpdateUserId = "ProductPriceUpdateUserId",
            ProductPriceUpdateDate = "ProductPriceUpdateDate",
            ProductPriceIsActive = "ProductPriceIsActive"
        }
    }
}

