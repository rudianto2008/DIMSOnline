namespace DIMSOnline.Transaction {
    export interface ServiceUnitTypeDetailRow {
        ServiceUnitTypeDetailId?: number;
        ServiceUnitId?: number;
        CategoryUnitId?: number;
        JobCodeNo?: string;
        Description?: string;
        StandartOpTime?: number;
        ChargePerHour?: number;
        ServiceHour?: number;
        TotalCharge?: number;
        ServiceUnitTypeId?: number;
        ServiceUnitTypeCategoryUnitId?: number;
        ServiceUnitTypeProductId?: number;
        ServiceUnitTypeJobCodeNo?: string;
        ServiceUnitTypeDescription?: string;
        ServiceUnitTypeChargePerHour?: number;
        ServiceUnitType?: string;
        ServiceUnitTypeStandartOpTime?: number;
        ServiceUnitTypeContinued?: boolean;
    }

    export namespace ServiceUnitTypeDetailRow {
        export const idProperty = 'ServiceUnitTypeDetailId';
        export const nameProperty = 'JobCodeNo';
        export const localTextPrefix = 'Transaction.ServiceUnitTypeDetail';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            ServiceUnitTypeDetailId = "ServiceUnitTypeDetailId",
            ServiceUnitId = "ServiceUnitId",
            CategoryUnitId = "CategoryUnitId",
            JobCodeNo = "JobCodeNo",
            Description = "Description",
            StandartOpTime = "StandartOpTime",
            ChargePerHour = "ChargePerHour",
            ServiceHour = "ServiceHour",
            TotalCharge = "TotalCharge",
            ServiceUnitTypeId = "ServiceUnitTypeId",
            ServiceUnitTypeCategoryUnitId = "ServiceUnitTypeCategoryUnitId",
            ServiceUnitTypeProductId = "ServiceUnitTypeProductId",
            ServiceUnitTypeJobCodeNo = "ServiceUnitTypeJobCodeNo",
            ServiceUnitTypeDescription = "ServiceUnitTypeDescription",
            ServiceUnitTypeChargePerHour = "ServiceUnitTypeChargePerHour",
            ServiceUnitType = "ServiceUnitType",
            ServiceUnitTypeStandartOpTime = "ServiceUnitTypeStandartOpTime",
            ServiceUnitTypeContinued = "ServiceUnitTypeContinued"
        }
    }
}

