namespace DIMSOnline.Configuration {
    export interface CompanyRow {
        CompanyId?: number;
        CompanyName?: string;
        Address?: string;
        Fax?: string;
        Logo?: string;
        Phone?: string;
        ContactPerson?: string;
        IslandId?: number;
        ProvinceId?: number;
        CityId?: number;
        OfficeType?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
        IslandIslandCode?: string;
        IslandIslandName?: string;
        IslandInsertUserId?: number;
        IslandInsertDate?: string;
        IslandUpdateUserId?: number;
        IslandUpdateDate?: string;
        IslandIsActive?: number;
        ProvinceProvinceCode?: string;
        ProvinceIslandId?: number;
        ProvinceProvinceName?: string;
        ProvinceInsertUserId?: number;
        ProvinceInsertDate?: string;
        ProvinceUpdateUserId?: number;
        ProvinceUpdateDate?: string;
        ProvinceIsActive?: number;
        CityCityCode?: string;
        CityProvinceId?: number;
        CityIslandId?: number;
        CityCityName?: string;
        CityInsertUserId?: number;
        CityInsertDate?: string;
        CityUpdateUserId?: number;
        CityUpdateDate?: string;
        CityIsActive?: number;
    }

    export namespace CompanyRow {
        export const idProperty = 'CompanyId';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Configuration.Company';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            CompanyId = "CompanyId",
            CompanyName = "CompanyName",
            Address = "Address",
            Fax = "Fax",
            Logo = "Logo",
            Phone = "Phone",
            ContactPerson = "ContactPerson",
            IslandId = "IslandId",
            ProvinceId = "ProvinceId",
            CityId = "CityId",
            OfficeType = "OfficeType",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive",
            IslandIslandCode = "IslandIslandCode",
            IslandIslandName = "IslandIslandName",
            IslandInsertUserId = "IslandInsertUserId",
            IslandInsertDate = "IslandInsertDate",
            IslandUpdateUserId = "IslandUpdateUserId",
            IslandUpdateDate = "IslandUpdateDate",
            IslandIsActive = "IslandIsActive",
            ProvinceProvinceCode = "ProvinceProvinceCode",
            ProvinceIslandId = "ProvinceIslandId",
            ProvinceProvinceName = "ProvinceProvinceName",
            ProvinceInsertUserId = "ProvinceInsertUserId",
            ProvinceInsertDate = "ProvinceInsertDate",
            ProvinceUpdateUserId = "ProvinceUpdateUserId",
            ProvinceUpdateDate = "ProvinceUpdateDate",
            ProvinceIsActive = "ProvinceIsActive",
            CityCityCode = "CityCityCode",
            CityProvinceId = "CityProvinceId",
            CityIslandId = "CityIslandId",
            CityCityName = "CityCityName",
            CityInsertUserId = "CityInsertUserId",
            CityInsertDate = "CityInsertDate",
            CityUpdateUserId = "CityUpdateUserId",
            CityUpdateDate = "CityUpdateDate",
            CityIsActive = "CityIsActive"
        }
    }
}

