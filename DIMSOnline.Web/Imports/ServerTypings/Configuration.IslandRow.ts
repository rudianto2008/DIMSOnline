namespace DIMSOnline.Configuration {
    export interface IslandRow {
        IslandId?: number;
        IslandCode?: string;
        IslandName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
    }

    export namespace IslandRow {
        export const idProperty = 'IslandId';
        export const nameProperty = 'IslandName';
        export const localTextPrefix = 'Configuration.Island';
        export const lookupKey = 'LookupIsland';

        export function getLookup(): Q.Lookup<IslandRow> {
            return Q.getLookup<IslandRow>('LookupIsland');
        }
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            IslandId = "IslandId",
            IslandCode = "IslandCode",
            IslandName = "IslandName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive"
        }
    }
}

