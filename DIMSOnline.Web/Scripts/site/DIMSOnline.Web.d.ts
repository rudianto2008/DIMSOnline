﻿/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace DIMSOnline.Administration {
}
declare namespace DIMSOnline.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace DIMSOnline.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace DIMSOnline.Administration {
}
declare namespace DIMSOnline.Administration {
}
declare namespace DIMSOnline.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace DIMSOnline.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace DIMSOnline.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace DIMSOnline.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace DIMSOnline.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace DIMSOnline.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace DIMSOnline.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace DIMSOnline.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace DIMSOnline.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace DIMSOnline.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace DIMSOnline.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace DIMSOnline.Administration {
}
declare namespace DIMSOnline.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace DIMSOnline.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace DIMSOnline.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace DIMSOnline.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace DIMSOnline.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace DIMSOnline.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace DIMSOnline.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace DIMSOnline.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace DIMSOnline.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace DIMSOnline.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace DIMSOnline.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace DIMSOnline.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace DIMSOnline.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace DIMSOnline.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace DIMSOnline.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace DIMSOnline.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
    interface BinLocationForm {
        BinLocation: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }
    class BinLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Configuration {
    interface BinLocationRow {
        BinLocationId?: number;
        BinLocation?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
    }
    namespace BinLocationRow {
        const idProperty = "BinLocationId";
        const nameProperty = "BinLocation";
        const localTextPrefix = "Configuration.BinLocation";
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
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
declare namespace DIMSOnline.Configuration {
    namespace BinLocationService {
        const baseUrl = "Configuration/BinLocation";
        function Create(request: Serenity.SaveRequest<BinLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BinLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BinLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BinLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configuration/BinLocation/Create",
            Update = "Configuration/BinLocation/Update",
            Delete = "Configuration/BinLocation/Delete",
            Retrieve = "Configuration/BinLocation/Retrieve",
            List = "Configuration/BinLocation/List"
        }
    }
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
    interface CategoryUnitForm {
        CategoryUnitName: Serenity.StringEditor;
        PricePerHour: Serenity.DecimalEditor;
    }
    class CategoryUnitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Configuration {
    interface CategoryUnitRow {
        CategoryUnitId?: number;
        CategoryUnitName?: string;
        PricePerHour?: number;
    }
    namespace CategoryUnitRow {
        const idProperty = "CategoryUnitId";
        const nameProperty = "CategoryUnitName";
        const localTextPrefix = "Configuration.CategoryUnit";
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
            CategoryUnitId = "CategoryUnitId",
            CategoryUnitName = "CategoryUnitName",
            PricePerHour = "PricePerHour"
        }
    }
}
declare namespace DIMSOnline.Configuration {
    namespace CategoryUnitService {
        const baseUrl = "Configuration/CategoryUnit";
        function Create(request: Serenity.SaveRequest<CategoryUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configuration/CategoryUnit/Create",
            Update = "Configuration/CategoryUnit/Update",
            Delete = "Configuration/CategoryUnit/Delete",
            Retrieve = "Configuration/CategoryUnit/Retrieve",
            List = "Configuration/CategoryUnit/List"
        }
    }
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
    interface CityForm {
        CityCode: Serenity.StringEditor;
        ProvinceId: Serenity.IntegerEditor;
        IslandId: Serenity.IntegerEditor;
        CityName: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }
    class CityForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Configuration {
    interface CityRow {
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
    namespace CityRow {
        const idProperty = "CityId";
        const nameProperty = "CityName";
        const localTextPrefix = "Configuration.City";
        const lookupKey = "LookupCity";
        function getLookup(): Q.Lookup<CityRow>;
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
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
declare namespace DIMSOnline.Configuration {
    namespace CityService {
        const baseUrl = "Configuration/City";
        function Create(request: Serenity.SaveRequest<CityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configuration/City/Create",
            Update = "Configuration/City/Update",
            Delete = "Configuration/City/Delete",
            Retrieve = "Configuration/City/Retrieve",
            List = "Configuration/City/List"
        }
    }
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
    interface CompanyForm {
        CompanyName: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
    }
    class CompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Configuration {
    interface CompanyRow {
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
    namespace CompanyRow {
        const idProperty = "CompanyId";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Configuration.Company";
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
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
declare namespace DIMSOnline.Configuration {
    namespace CompanyService {
        const baseUrl = "Configuration/Company";
        function Create(request: Serenity.SaveRequest<CompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configuration/Company/Create",
            Update = "Configuration/Company/Update",
            Delete = "Configuration/Company/Delete",
            Retrieve = "Configuration/Company/Retrieve",
            List = "Configuration/Company/List"
        }
    }
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
    interface CustomerForm {
        CustomerNumber: Serenity.StringEditor;
        CompanyId: Serenity.IntegerEditor;
        CustomerName: Serenity.StringEditor;
        ProvinceId: Serenity.IntegerEditor;
        CityId: Serenity.IntegerEditor;
        Address: Serenity.StringEditor;
        Pic: Serenity.StringEditor;
        IslandId: Serenity.IntegerEditor;
        PostCode: Serenity.IntegerEditor;
        Phone: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        BirthPlace: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        Npwp: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        DeleteUserId: Serenity.IntegerEditor;
        DeleteDate: Serenity.DateEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Configuration {
    interface CustomerRow {
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
    namespace CustomerRow {
        const idProperty = "CustomerId";
        const nameProperty = "CustomerNumber";
        const localTextPrefix = "Configuration.Customer";
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
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
declare namespace DIMSOnline.Configuration {
    namespace CustomerService {
        const baseUrl = "Configuration/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configuration/Customer/Create",
            Update = "Configuration/Customer/Update",
            Delete = "Configuration/Customer/Delete",
            Retrieve = "Configuration/Customer/Retrieve",
            List = "Configuration/Customer/List"
        }
    }
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
    interface IslandForm {
        IslandCode: Serenity.StringEditor;
        IslandName: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }
    class IslandForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Configuration {
    interface IslandRow {
        IslandId?: number;
        IslandCode?: string;
        IslandName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
    }
    namespace IslandRow {
        const idProperty = "IslandId";
        const nameProperty = "IslandCode";
        const localTextPrefix = "Configuration.Island";
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
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
declare namespace DIMSOnline.Configuration {
    namespace IslandService {
        const baseUrl = "Configuration/Island";
        function Create(request: Serenity.SaveRequest<IslandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<IslandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<IslandRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<IslandRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configuration/Island/Create",
            Update = "Configuration/Island/Update",
            Delete = "Configuration/Island/Delete",
            Retrieve = "Configuration/Island/Retrieve",
            List = "Configuration/Island/List"
        }
    }
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
    interface MovementTypeForm {
        MovementTypeName: Serenity.StringEditor;
        StatusInOut: Serenity.StringEditor;
    }
    class MovementTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Configuration {
    interface MovementTypeRow {
        MovementTypeId?: number;
        MovementTypeName?: string;
        StatusInOut?: string;
    }
    namespace MovementTypeRow {
        const idProperty = "MovementTypeId";
        const nameProperty = "MovementTypeName";
        const localTextPrefix = "Configuration.MovementType";
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
            MovementTypeId = "MovementTypeId",
            MovementTypeName = "MovementTypeName",
            StatusInOut = "StatusInOut"
        }
    }
}
declare namespace DIMSOnline.Configuration {
    namespace MovementTypeService {
        const baseUrl = "Configuration/MovementType";
        function Create(request: Serenity.SaveRequest<MovementTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MovementTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MovementTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MovementTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configuration/MovementType/Create",
            Update = "Configuration/MovementType/Update",
            Delete = "Configuration/MovementType/Delete",
            Retrieve = "Configuration/MovementType/Retrieve",
            List = "Configuration/MovementType/List"
        }
    }
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
    interface OrderCategoryForm {
        OrderCategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }
    class OrderCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Configuration {
    interface OrderCategoryRow {
        OrderCategoryId?: number;
        OrderCategoryName?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
    }
    namespace OrderCategoryRow {
        const idProperty = "OrderCategoryId";
        const nameProperty = "OrderCategoryName";
        const localTextPrefix = "Configuration.OrderCategory";
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
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
declare namespace DIMSOnline.Configuration {
    namespace OrderCategoryService {
        const baseUrl = "Configuration/OrderCategory";
        function Create(request: Serenity.SaveRequest<OrderCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configuration/OrderCategory/Create",
            Update = "Configuration/OrderCategory/Update",
            Delete = "Configuration/OrderCategory/Delete",
            Retrieve = "Configuration/OrderCategory/Retrieve",
            List = "Configuration/OrderCategory/List"
        }
    }
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
}
declare namespace DIMSOnline.Configuration {
    interface ProvinceForm {
        ProvinceCode: Serenity.StringEditor;
        IslandId: Serenity.IntegerEditor;
        ProvinceName: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }
    class ProvinceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Configuration {
    interface ProvinceRow {
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
    namespace ProvinceRow {
        const idProperty = "ProvinceId";
        const nameProperty = "ProvinceName";
        const localTextPrefix = "Configuration.Province";
        const lookupKey = "LookupProvince";
        function getLookup(): Q.Lookup<ProvinceRow>;
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
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
declare namespace DIMSOnline.Configuration {
    namespace ProvinceService {
        const baseUrl = "Configuration/Province";
        function Create(request: Serenity.SaveRequest<ProvinceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProvinceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProvinceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProvinceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configuration/Province/Create",
            Update = "Configuration/Province/Update",
            Delete = "Configuration/Province/Delete",
            Retrieve = "Configuration/Province/Retrieve",
            List = "Configuration/Province/List"
        }
    }
}
declare namespace DIMSOnline {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace DIMSOnline {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace DIMSOnline {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace DIMSOnline {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace DIMSOnline.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace DIMSOnline.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace DIMSOnline.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace DIMSOnline.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace DIMSOnline.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace DIMSOnline {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace DIMSOnline.Texts {
}
declare namespace DIMSOnline.Transaction {
}
declare namespace DIMSOnline.Transaction {
    interface InventoryForm {
        ProductId: Serenity.IntegerEditor;
        OrderCategoryId: Serenity.IntegerEditor;
        Qty: Serenity.IntegerEditor;
        InventoryStatus: Serenity.StringEditor;
        DocumentNo: Serenity.StringEditor;
        Stock: Serenity.IntegerEditor;
        ProductPrice: Serenity.DecimalEditor;
        ProductPriceNumber: Serenity.StringEditor;
        ProductBasePrice: Serenity.DecimalEditor;
        ProductBasePriceNumber: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        CompanyId: Serenity.IntegerEditor;
    }
    class InventoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Transaction {
    interface InventoryRow {
        InventoryId?: number;
        ProductId?: number;
        OrderCategoryId?: number;
        Qty?: number;
        InventoryStatus?: string;
        DocumentNo?: string;
        Stock?: number;
        ProductPrice?: number;
        ProductPriceNumber?: string;
        ProductBasePrice?: number;
        ProductBasePriceNumber?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        CompanyId?: number;
        ProductProductNumber?: string;
        ProductModelName?: string;
        ProductCategoryUnitId?: number;
        ProductUnitStockId?: number;
        ProductPartNumber?: string;
        ProductProductTypeId?: number;
        ProductMinimumStock?: number;
        ProductContinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocationId?: number;
        ProductInsertUserId?: number;
        ProductInsertDate?: string;
        ProductUpdateUserId?: number;
        ProductUpdateDate?: string;
        ProductIsActive?: number;
        ProductStockQuantity?: number;
    }
    namespace InventoryRow {
        const idProperty = "InventoryId";
        const nameProperty = "InventoryStatus";
        const localTextPrefix = "Transaction.Inventory";
        const deletePermission = "Administration:Transaction";
        const insertPermission = "Administration:Transaction";
        const readPermission = "Administration:Transaction";
        const updatePermission = "Administration:Transaction";
        const enum Fields {
            InventoryId = "InventoryId",
            ProductId = "ProductId",
            OrderCategoryId = "OrderCategoryId",
            Qty = "Qty",
            InventoryStatus = "InventoryStatus",
            DocumentNo = "DocumentNo",
            Stock = "Stock",
            ProductPrice = "ProductPrice",
            ProductPriceNumber = "ProductPriceNumber",
            ProductBasePrice = "ProductBasePrice",
            ProductBasePriceNumber = "ProductBasePriceNumber",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            CompanyId = "CompanyId",
            ProductProductNumber = "ProductProductNumber",
            ProductModelName = "ProductModelName",
            ProductCategoryUnitId = "ProductCategoryUnitId",
            ProductUnitStockId = "ProductUnitStockId",
            ProductPartNumber = "ProductPartNumber",
            ProductProductTypeId = "ProductProductTypeId",
            ProductMinimumStock = "ProductMinimumStock",
            ProductContinued = "ProductContinued",
            ProductProductImage = "ProductProductImage",
            ProductDescription = "ProductDescription",
            ProductBinLocationId = "ProductBinLocationId",
            ProductInsertUserId = "ProductInsertUserId",
            ProductInsertDate = "ProductInsertDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductIsActive = "ProductIsActive",
            ProductStockQuantity = "ProductStockQuantity"
        }
    }
}
declare namespace DIMSOnline.Transaction {
    namespace InventoryService {
        const baseUrl = "Transaction/Inventory";
        function Create(request: Serenity.SaveRequest<InventoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InventoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InventoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InventoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/Inventory/Create",
            Update = "Transaction/Inventory/Update",
            Delete = "Transaction/Inventory/Delete",
            Retrieve = "Transaction/Inventory/Retrieve",
            List = "Transaction/Inventory/List"
        }
    }
}
declare namespace DIMSOnline.Transaction {
}
declare namespace DIMSOnline.Transaction {
    interface MovementStockForm {
        MovementTypeId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        MovementQty: Serenity.IntegerEditor;
        MovementStockNumber: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }
    class MovementStockForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace DIMSOnline.Transaction {
    interface MovementStockRow {
        MovementStockId?: number;
        MovementTypeId?: number;
        ProductId?: number;
        MovementQty?: number;
        MovementStockNumber?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        MovementTypeMovementTypeName?: string;
        MovementTypeStatusInOut?: string;
        ProductProductNumber?: string;
        ProductModelName?: string;
        ProductCategoryUnitId?: number;
        ProductUnitStockId?: number;
        ProductPartNumber?: string;
        ProductProductTypeId?: number;
        ProductMinimumStock?: number;
        ProductContinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocationId?: number;
        ProductInsertUserId?: number;
        ProductInsertDate?: string;
        ProductUpdateUserId?: number;
        ProductUpdateDate?: string;
        ProductIsActive?: number;
        ProductStockQuantity?: number;
    }
    namespace MovementStockRow {
        const idProperty = "MovementStockId";
        const nameProperty = "MovementStockNumber";
        const localTextPrefix = "Transaction.MovementStock";
        const deletePermission = "Administration:Transaction";
        const insertPermission = "Administration:Transaction";
        const readPermission = "Administration:Transaction";
        const updatePermission = "Administration:Transaction";
        const enum Fields {
            MovementStockId = "MovementStockId",
            MovementTypeId = "MovementTypeId",
            ProductId = "ProductId",
            MovementQty = "MovementQty",
            MovementStockNumber = "MovementStockNumber",
            Description = "Description",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            MovementTypeMovementTypeName = "MovementTypeMovementTypeName",
            MovementTypeStatusInOut = "MovementTypeStatusInOut",
            ProductProductNumber = "ProductProductNumber",
            ProductModelName = "ProductModelName",
            ProductCategoryUnitId = "ProductCategoryUnitId",
            ProductUnitStockId = "ProductUnitStockId",
            ProductPartNumber = "ProductPartNumber",
            ProductProductTypeId = "ProductProductTypeId",
            ProductMinimumStock = "ProductMinimumStock",
            ProductContinued = "ProductContinued",
            ProductProductImage = "ProductProductImage",
            ProductDescription = "ProductDescription",
            ProductBinLocationId = "ProductBinLocationId",
            ProductInsertUserId = "ProductInsertUserId",
            ProductInsertDate = "ProductInsertDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductIsActive = "ProductIsActive",
            ProductStockQuantity = "ProductStockQuantity"
        }
    }
}
declare namespace DIMSOnline.Transaction {
    namespace MovementStockService {
        const baseUrl = "Transaction/MovementStock";
        function Create(request: Serenity.SaveRequest<MovementStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MovementStockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MovementStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MovementStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/MovementStock/Create",
            Update = "Transaction/MovementStock/Update",
            Delete = "Transaction/MovementStock/Delete",
            Retrieve = "Transaction/MovementStock/Retrieve",
            List = "Transaction/MovementStock/List"
        }
    }
}
declare namespace DIMSOnline.Transaction {
}
declare namespace DIMSOnline.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace DIMSOnline.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace DIMSOnline.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace DIMSOnline.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace DIMSOnline.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace DIMSOnline.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace DIMSOnline.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace DIMSOnline.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace DIMSOnline.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace DIMSOnline.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace DIMSOnline.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace DIMSOnline.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace DIMSOnline.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace DIMSOnline.LanguageList {
    function getValue(): string[][];
}
declare namespace DIMSOnline.ScriptInitialization {
}
declare namespace DIMSOnline {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace DIMSOnline.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace DIMSOnline.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace DIMSOnline.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace DIMSOnline.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace DIMSOnline.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace DIMSOnline.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace DIMSOnline {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace DIMSOnline.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace DIMSOnline.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace DIMSOnline.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace DIMSOnline.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace DIMSOnline.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace DIMSOnline.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace DIMSOnline.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace DIMSOnline.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace DIMSOnline.Configuration {
    class BinLocationDialog extends Serenity.EntityDialog<BinLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BinLocationForm;
    }
}
declare namespace DIMSOnline.Configuration {
    class BinLocationGrid extends Serenity.EntityGrid<BinLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BinLocationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Configuration {
    class CategoryUnitDialog extends Serenity.EntityDialog<CategoryUnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoryUnitForm;
    }
}
declare namespace DIMSOnline.Configuration {
    class CategoryUnitGrid extends Serenity.EntityGrid<CategoryUnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoryUnitDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Configuration {
    class CityDialog extends Serenity.EntityDialog<CityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CityForm;
    }
}
declare namespace DIMSOnline.Configuration {
    class CityGrid extends Serenity.EntityGrid<CityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CityDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Configuration {
    class CompanyDialog extends Serenity.EntityDialog<CompanyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CompanyForm;
    }
}
declare namespace DIMSOnline.Configuration {
    class CompanyGrid extends Serenity.EntityGrid<CompanyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompanyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Configuration {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerForm;
    }
}
declare namespace DIMSOnline.Configuration {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Configuration {
    class IslandDialog extends Serenity.EntityDialog<IslandRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: IslandForm;
    }
}
declare namespace DIMSOnline.Configuration {
    class IslandGrid extends Serenity.EntityGrid<IslandRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof IslandDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Configuration {
    class MovementTypeDialog extends Serenity.EntityDialog<MovementTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MovementTypeForm;
    }
}
declare namespace DIMSOnline.Configuration {
    class MovementTypeGrid extends Serenity.EntityGrid<MovementTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MovementTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Configuration {
    class OrderCategoryDialog extends Serenity.EntityDialog<OrderCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OrderCategoryForm;
    }
}
declare namespace DIMSOnline.Configuration {
    class OrderCategoryGrid extends Serenity.EntityGrid<OrderCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderCategoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Configuration {
    class ProvinceDialog extends Serenity.EntityDialog<ProvinceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProvinceForm;
    }
}
declare namespace DIMSOnline.Configuration {
    class ProvinceGrid extends Serenity.EntityGrid<ProvinceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProvinceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace DIMSOnline.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Transaction {
    class InventoryDialog extends Serenity.EntityDialog<InventoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InventoryForm;
    }
}
declare namespace DIMSOnline.Transaction {
    class InventoryGrid extends Serenity.EntityGrid<InventoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InventoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace DIMSOnline.Transaction {
    class MovementStockDialog extends Serenity.EntityDialog<MovementStockRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MovementStockForm;
    }
}
declare namespace DIMSOnline.Transaction {
    class MovementStockGrid extends Serenity.EntityGrid<MovementStockRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MovementStockDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
