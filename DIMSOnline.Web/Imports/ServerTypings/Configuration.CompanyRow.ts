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
            IsActive = "IsActive"
        }
    }
}

