namespace DIMSOnline.Configuration {
    export interface OrderCategoryRow {
        OrderCategoryId?: number;
        OrderCategoryName?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
    }

    export namespace OrderCategoryRow {
        export const idProperty = 'OrderCategoryId';
        export const nameProperty = 'OrderCategoryName';
        export const localTextPrefix = 'Configuration.OrderCategory';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            OrderCategoryId = "OrderCategoryId",
            OrderCategoryName = "OrderCategoryName",
            Description = "Description",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive"
        }
    }
}

