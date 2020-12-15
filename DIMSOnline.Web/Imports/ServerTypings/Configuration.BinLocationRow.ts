namespace DIMSOnline.Configuration {
    export interface BinLocationRow {
        BinLocationId?: number;
        BinLocation?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
    }

    export namespace BinLocationRow {
        export const idProperty = 'BinLocationId';
        export const nameProperty = 'BinLocation';
        export const localTextPrefix = 'Configuration.BinLocation';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            BinLocationId = "BinLocationId",
            BinLocation = "BinLocation",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive"
        }
    }
}

