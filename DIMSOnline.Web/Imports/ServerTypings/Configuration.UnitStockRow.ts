namespace DIMSOnline.Configuration {
    export interface UnitStockRow {
        UnitStockId?: number;
        UnitStock?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
    }

    export namespace UnitStockRow {
        export const idProperty = 'UnitStockId';
        export const nameProperty = 'UnitStock';
        export const localTextPrefix = 'Configuration.UnitStock';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            UnitStockId = "UnitStockId",
            UnitStock = "UnitStock",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive"
        }
    }
}

