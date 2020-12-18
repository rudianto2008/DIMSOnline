namespace DIMSOnline.Configuration {
    export interface ProductPriceRow {
        ProductPriceId?: number;
        ProductPriceNumber?: string;
        ProductId?: number;
        OrderCategoryId?: number;
        Price?: number;
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
        OrderCategoryOrderCategoryName?: string;
        OrderCategoryDescription?: string;
        OrderCategoryInsertUserId?: number;
        OrderCategoryInsertDate?: string;
        OrderCategoryUpdateUserId?: number;
        OrderCategoryUpdateDate?: string;
        OrderCategoryIsActive?: number;
    }

    export namespace ProductPriceRow {
        export const idProperty = 'ProductPriceId';
        export const nameProperty = 'ProductPriceNumber';
        export const localTextPrefix = 'Configuration.ProductPrice';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            ProductPriceId = "ProductPriceId",
            ProductPriceNumber = "ProductPriceNumber",
            ProductId = "ProductId",
            OrderCategoryId = "OrderCategoryId",
            Price = "Price",
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
            ProductStockQuantity = "ProductStockQuantity",
            OrderCategoryOrderCategoryName = "OrderCategoryOrderCategoryName",
            OrderCategoryDescription = "OrderCategoryDescription",
            OrderCategoryInsertUserId = "OrderCategoryInsertUserId",
            OrderCategoryInsertDate = "OrderCategoryInsertDate",
            OrderCategoryUpdateUserId = "OrderCategoryUpdateUserId",
            OrderCategoryUpdateDate = "OrderCategoryUpdateDate",
            OrderCategoryIsActive = "OrderCategoryIsActive"
        }
    }
}

