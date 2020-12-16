namespace DIMSOnline.Transaction {
    export interface InventoryRow {
        InventoryId?: number;
        ProductId?: number;
        OrderCategoryId?: number;
        Qty?: number;
        InventoryStatus?: string;
        DocumentNo?: string;
        Stock?: number;
        ProductPrice?: number;
        ProductPriceNumber?: string;
        ProductBasePrice?: number;
        ProductBasePriceNumber?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        CompanyId?: number;
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

    export namespace InventoryRow {
        export const idProperty = 'InventoryId';
        export const nameProperty = 'InventoryStatus';
        export const localTextPrefix = 'Transaction.Inventory';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            InventoryId = "InventoryId",
            ProductId = "ProductId",
            OrderCategoryId = "OrderCategoryId",
            Qty = "Qty",
            InventoryStatus = "InventoryStatus",
            DocumentNo = "DocumentNo",
            Stock = "Stock",
            ProductPrice = "ProductPrice",
            ProductPriceNumber = "ProductPriceNumber",
            ProductBasePrice = "ProductBasePrice",
            ProductBasePriceNumber = "ProductBasePriceNumber",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            CompanyId = "CompanyId",
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

