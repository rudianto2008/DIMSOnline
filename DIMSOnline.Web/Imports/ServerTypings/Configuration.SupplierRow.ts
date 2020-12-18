namespace DIMSOnline.Configuration {
    export interface SupplierRow {
        SupplierId?: number;
        SupplierName?: string;
        Address?: string;
        Phone?: string;
        ContactName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
    }

    export namespace SupplierRow {
        export const idProperty = 'SupplierId';
        export const nameProperty = 'SupplierName';
        export const localTextPrefix = 'Configuration.Supplier';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            SupplierId = "SupplierId",
            SupplierName = "SupplierName",
            Address = "Address",
            Phone = "Phone",
            ContactName = "ContactName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive"
        }
    }
}

