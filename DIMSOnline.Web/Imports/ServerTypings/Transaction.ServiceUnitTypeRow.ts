namespace DIMSOnline.Transaction {
    export interface ServiceUnitTypeRow {
        ServiceUnitTypeId?: number;
        CategoryUnitId?: number;
        ProductId?: number;
        JobCodeNo?: string;
        Description?: string;
        ChargePerHour?: number;
        ServiceUnitType?: string;
        StandartOpTime?: number;
        Continued?: boolean;
        CategoryUnitCategoryUnitName?: string;
        CategoryUnitPricePerHour?: number;
    }

    export namespace ServiceUnitTypeRow {
        export const idProperty = 'ServiceUnitTypeId';
        export const nameProperty = 'ServiceUnitType';
        export const localTextPrefix = 'Transaction.ServiceUnitType';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            ServiceUnitTypeId = "ServiceUnitTypeId",
            CategoryUnitId = "CategoryUnitId",
            ProductId = "ProductId",
            JobCodeNo = "JobCodeNo",
            Description = "Description",
            ChargePerHour = "ChargePerHour",
            ServiceUnitType = "ServiceUnitType",
            StandartOpTime = "StandartOpTime",
            Continued = "Continued",
            CategoryUnitCategoryUnitName = "CategoryUnitCategoryUnitName",
            CategoryUnitPricePerHour = "CategoryUnitPricePerHour"
        }
    }
}

