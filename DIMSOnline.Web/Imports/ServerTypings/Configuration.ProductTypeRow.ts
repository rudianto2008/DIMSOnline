namespace DIMSOnline.Configuration {
    export interface ProductTypeRow {
        ProductTypeId?: number;
        ProductTypeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
    }

    export namespace ProductTypeRow {
        export const idProperty = 'ProductTypeId';
        export const nameProperty = 'ProductTypeName';
        export const localTextPrefix = 'Configuration.ProductType';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            ProductTypeId = "ProductTypeId",
            ProductTypeName = "ProductTypeName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive"
        }
    }
}

