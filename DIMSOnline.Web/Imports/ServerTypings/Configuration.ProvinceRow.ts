namespace DIMSOnline.Configuration {
    export interface ProvinceRow {
        ProvinceId?: number;
        ProvinceCode?: string;
        IslandId?: number;
        ProvinceName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        IslandIslandCode?: string;
        IslandIslandName?: string;
        IslandInsertUserId?: number;
        IslandInsertDate?: string;
        IslandUpdateUserId?: number;
        IslandUpdateDate?: string;
        IslandIsActive?: number;
    }

    export namespace ProvinceRow {
        export const idProperty = 'ProvinceId';
        export const nameProperty = 'ProvinceName';
        export const localTextPrefix = 'Configuration.Province';
        export const lookupKey = 'LookupProvince';

        export function getLookup(): Q.Lookup<ProvinceRow> {
            return Q.getLookup<ProvinceRow>('LookupProvince');
        }
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            ProvinceId = "ProvinceId",
            ProvinceCode = "ProvinceCode",
            IslandId = "IslandId",
            ProvinceName = "ProvinceName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            IslandIslandCode = "IslandIslandCode",
            IslandIslandName = "IslandIslandName",
            IslandInsertUserId = "IslandInsertUserId",
            IslandInsertDate = "IslandInsertDate",
            IslandUpdateUserId = "IslandUpdateUserId",
            IslandUpdateDate = "IslandUpdateDate",
            IslandIsActive = "IslandIsActive"
        }
    }
}

