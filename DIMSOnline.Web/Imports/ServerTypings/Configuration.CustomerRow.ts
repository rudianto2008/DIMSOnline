namespace DIMSOnline.Configuration {
    export interface CustomerRow {
        CustomerId?: number;
        CustomerNumber?: string;
        CompanyId?: number;
        CustomerName?: string;
        ProvinceId?: number;
        CityId?: number;
        Address?: string;
        Pic?: string;
        IslandId?: number;
        PostCode?: number;
        Phone?: string;
        ContactPerson?: string;
        Fax?: string;
        BirthPlace?: string;
        BirthDate?: string;
        Email?: string;
        Npwp?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        DeleteUserId?: number;
        DeleteDate?: string;
        CompanyCompanyName?: string;
        CompanyAddress?: string;
        CompanyFax?: string;
        CompanyLogo?: string;
        CompanyPhone?: string;
        CompanyContactPerson?: string;
        CompanyIslandId?: number;
        CompanyProvinceId?: number;
        CompanyCityId?: number;
        CompanyOfficeType?: string;
        CompanyInsertUserId?: number;
        CompanyInsertDate?: string;
        CompanyUpdateUserId?: number;
        CompanyUpdateDate?: string;
        CompanyDeleteUserId?: number;
        CompanyDeleteDate?: string;
        CompanyIsActive?: number;
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
        IslandIslandCode?: string;
        IslandIslandName?: string;
        IslandInsertUserId?: number;
        IslandInsertDate?: string;
        IslandUpdateUserId?: number;
        IslandUpdateDate?: string;
        IslandIsActive?: number;
    }

    export namespace CustomerRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'CustomerNumber';
        export const localTextPrefix = 'Configuration.Customer';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            CustomerNumber = "CustomerNumber",
            CompanyId = "CompanyId",
            CustomerName = "CustomerName",
            ProvinceId = "ProvinceId",
            CityId = "CityId",
            Address = "Address",
            Pic = "Pic",
            IslandId = "IslandId",
            PostCode = "PostCode",
            Phone = "Phone",
            ContactPerson = "ContactPerson",
            Fax = "Fax",
            BirthPlace = "BirthPlace",
            BirthDate = "BirthDate",
            Email = "Email",
            Npwp = "Npwp",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            CompanyCompanyName = "CompanyCompanyName",
            CompanyAddress = "CompanyAddress",
            CompanyFax = "CompanyFax",
            CompanyLogo = "CompanyLogo",
            CompanyPhone = "CompanyPhone",
            CompanyContactPerson = "CompanyContactPerson",
            CompanyIslandId = "CompanyIslandId",
            CompanyProvinceId = "CompanyProvinceId",
            CompanyCityId = "CompanyCityId",
            CompanyOfficeType = "CompanyOfficeType",
            CompanyInsertUserId = "CompanyInsertUserId",
            CompanyInsertDate = "CompanyInsertDate",
            CompanyUpdateUserId = "CompanyUpdateUserId",
            CompanyUpdateDate = "CompanyUpdateDate",
            CompanyDeleteUserId = "CompanyDeleteUserId",
            CompanyDeleteDate = "CompanyDeleteDate",
            CompanyIsActive = "CompanyIsActive",
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
            CityIsActive = "CityIsActive",
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

