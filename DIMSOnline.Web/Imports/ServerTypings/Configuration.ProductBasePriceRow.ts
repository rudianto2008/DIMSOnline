namespace DIMSOnline.Configuration {
    export interface ProductBasePriceRow {
        ProductBasePriceId?: number;
        ProductBasePriceNumber?: string;
        ProductId?: number;
        Price?: number;
        ActualPrice?: number;
        Continued?: boolean;
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
    }

    export namespace ProductBasePriceRow {
        export const idProperty = 'ProductBasePriceId';
        export const nameProperty = 'ProductBasePriceNumber';
        export const localTextPrefix = 'Configuration.ProductBasePrice';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            ProductBasePriceId = "ProductBasePriceId",
            ProductBasePriceNumber = "ProductBasePriceNumber",
            ProductId = "ProductId",
            Price = "Price",
            ActualPrice = "ActualPrice",
            Continued = "Continued",
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
            ProductStockQuantity = "ProductStockQuantity"
        }
    }
}

