namespace DIMSOnline.Transaction {
    export interface MovementStockRow {
        MovementStockId?: number;
        MovementTypeId?: number;
        ProductId?: number;
        MovementQty?: number;
        MovementStockNumber?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        MovementTypeMovementTypeName?: string;
        MovementTypeStatusInOut?: string;
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

    export namespace MovementStockRow {
        export const idProperty = 'MovementStockId';
        export const nameProperty = 'MovementStockNumber';
        export const localTextPrefix = 'Transaction.MovementStock';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            MovementStockId = "MovementStockId",
            MovementTypeId = "MovementTypeId",
            ProductId = "ProductId",
            MovementQty = "MovementQty",
            MovementStockNumber = "MovementStockNumber",
            Description = "Description",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            MovementTypeMovementTypeName = "MovementTypeMovementTypeName",
            MovementTypeStatusInOut = "MovementTypeStatusInOut",
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

