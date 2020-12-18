namespace DIMSOnline.Configuration {
    export interface ProductsLogRow {
        ProductLogId?: number;
        ProductId?: number;
        ModelName?: string;
        UnitStock?: string;
        PartNumber?: string;
        ProductTypeId?: number;
        Continued?: boolean;
        ProductImage?: string;
        Description?: string;
        BinLocation?: string;
        OperationType?: number;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
    }

    export namespace ProductsLogRow {
        export const idProperty = 'ProductLogId';
        export const nameProperty = 'ModelName';
        export const localTextPrefix = 'Configuration.ProductsLog';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            ProductLogId = "ProductLogId",
            ProductId = "ProductId",
            ModelName = "ModelName",
            UnitStock = "UnitStock",
            PartNumber = "PartNumber",
            ProductTypeId = "ProductTypeId",
            Continued = "Continued",
            ProductImage = "ProductImage",
            Description = "Description",
            BinLocation = "BinLocation",
            OperationType = "OperationType",
            ChangingUserId = "ChangingUserId",
            ValidFrom = "ValidFrom",
            ValidUntil = "ValidUntil"
        }
    }
}

