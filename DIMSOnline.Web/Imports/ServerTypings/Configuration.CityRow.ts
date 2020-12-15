namespace DIMSOnline.Configuration {
    export interface CityRow {
        CityId?: number;
        CityCode?: string;
        ProvinceId?: number;
        IslandId?: number;
        CityName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        ProvinceProvinceCode?: string;
        ProvinceIslandId?: number;
        ProvinceProvinceName?: string;
        ProvinceInsertUserId?: number;
        ProvinceInsertDate?: string;
        ProvinceUpdateUserId?: number;
        ProvinceUpdateDate?: string;
        ProvinceIsActive?: number;
    }

    export namespace CityRow {
        export const idProperty = 'CityId';
        export const nameProperty = 'CityCode';
        export const localTextPrefix = 'Configuration.City';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            CityId = "CityId",
            CityCode = "CityCode",
            ProvinceId = "ProvinceId",
            IslandId = "IslandId",
            CityName = "CityName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            ProvinceProvinceCode = "ProvinceProvinceCode",
            ProvinceIslandId = "ProvinceIslandId",
            ProvinceProvinceName = "ProvinceProvinceName",
            ProvinceInsertUserId = "ProvinceInsertUserId",
            ProvinceInsertDate = "ProvinceInsertDate",
            ProvinceUpdateUserId = "ProvinceUpdateUserId",
            ProvinceUpdateDate = "ProvinceUpdateDate",
            ProvinceIsActive = "ProvinceIsActive"
        }
    }
}

