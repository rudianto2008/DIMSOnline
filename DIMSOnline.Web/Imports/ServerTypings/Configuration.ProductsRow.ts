namespace DIMSOnline.Configuration {
    export interface ProductsRow {
        ProductId?: number;
        ProductNumber?: string;
        ModelName?: string;
        CategoryUnitId?: number;
        UnitStockId?: number;
        PartNumber?: string;
        ProductTypeId?: number;
        MinimumStock?: number;
        Continued?: boolean;
        ProductImage?: string;
        Description?: string;
        BinLocationId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        StockQuantity?: number;
        CategoryUnitCategoryUnitName?: string;
        CategoryUnitPricePerHour?: number;
        UnitStock?: string;
        UnitStockInsertUserId?: number;
        UnitStockInsertDate?: string;
        UnitStockUpdateUserId?: number;
        UnitStockUpdateDate?: string;
        UnitStockIsActive?: number;
        ProductTypeProductTypeName?: string;
        ProductTypeInsertUserId?: number;
        ProductTypeInsertDate?: string;
        ProductTypeUpdateUserId?: number;
        ProductTypeUpdateDate?: string;
        ProductTypeIsActive?: number;
        BinLocation?: string;
        BinLocationInsertUserId?: number;
        BinLocationInsertDate?: string;
        BinLocationUpdateUserId?: number;
        BinLocationUpdateDate?: string;
        BinLocationIsActive?: number;
    }

    export namespace ProductsRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'ProductNumber';
        export const localTextPrefix = 'Configuration.Products';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            ProductId = "ProductId",
            ProductNumber = "ProductNumber",
            ModelName = "ModelName",
            CategoryUnitId = "CategoryUnitId",
            UnitStockId = "UnitStockId",
            PartNumber = "PartNumber",
            ProductTypeId = "ProductTypeId",
            MinimumStock = "MinimumStock",
            Continued = "Continued",
            ProductImage = "ProductImage",
            Description = "Description",
            BinLocationId = "BinLocationId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            StockQuantity = "StockQuantity",
            CategoryUnitCategoryUnitName = "CategoryUnitCategoryUnitName",
            CategoryUnitPricePerHour = "CategoryUnitPricePerHour",
            UnitStock = "UnitStock",
            UnitStockInsertUserId = "UnitStockInsertUserId",
            UnitStockInsertDate = "UnitStockInsertDate",
            UnitStockUpdateUserId = "UnitStockUpdateUserId",
            UnitStockUpdateDate = "UnitStockUpdateDate",
            UnitStockIsActive = "UnitStockIsActive",
            ProductTypeProductTypeName = "ProductTypeProductTypeName",
            ProductTypeInsertUserId = "ProductTypeInsertUserId",
            ProductTypeInsertDate = "ProductTypeInsertDate",
            ProductTypeUpdateUserId = "ProductTypeUpdateUserId",
            ProductTypeUpdateDate = "ProductTypeUpdateDate",
            ProductTypeIsActive = "ProductTypeIsActive",
            BinLocation = "BinLocation",
            BinLocationInsertUserId = "BinLocationInsertUserId",
            BinLocationInsertDate = "BinLocationInsertDate",
            BinLocationUpdateUserId = "BinLocationUpdateUserId",
            BinLocationUpdateDate = "BinLocationUpdateDate",
            BinLocationIsActive = "BinLocationIsActive"
        }
    }
}

