namespace DIMSOnline.Transaction {
    export interface ServiceUnitDetailRow {
        ServiceUnitDetailId?: number;
        ServiceUnitId?: number;
        ServiceUnitTypeId?: number;
        ChargePerHour?: number;
        ServiceHour?: number;
        ServiceCharge?: number;
        ServiceBy?: string;
        KmInUse?: number;
        ServiceDate?: string;
        OrderIdService?: number;
        ServiceUnitServiceUnitNumber?: string;
        ServiceUnitProductId?: number;
        ServiceUnitOrderUnitId?: number;
        ServiceUnitCustomerId?: number;
        ServiceUnitServiceDate?: string;
        ServiceUnitServiceBy?: string;
        ServiceUnitSerialNumber?: string;
        ServiceUnitManufactureYear?: string;
        ServiceUnitWarrantyNumber?: string;
        ServiceUnitRemark?: string;
        ServiceUnitServiceUnitStatus?: string;
        ServiceUnitHm?: string;
        ServiceUnitInsertUserId?: number;
        ServiceUnitInsertDate?: string;
        ServiceUnitUpdateUserId?: number;
        ServiceUnitUpdateDate?: string;
        ServiceUnitIsActive?: number;
        ServiceUnitTypeCategoryUnitId?: number;
        ServiceUnitTypeProductId?: number;
        ServiceUnitTypeJobCodeNo?: string;
        ServiceUnitTypeDescription?: string;
        ServiceUnitTypeChargePerHour?: number;
        ServiceUnitType?: string;
        ServiceUnitTypeStandartOpTime?: number;
        ServiceUnitTypeContinued?: boolean;
    }

    export namespace ServiceUnitDetailRow {
        export const idProperty = 'ServiceUnitDetailId';
        export const nameProperty = 'ServiceBy';
        export const localTextPrefix = 'Transaction.ServiceUnitDetail';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            ServiceUnitDetailId = "ServiceUnitDetailId",
            ServiceUnitId = "ServiceUnitId",
            ServiceUnitTypeId = "ServiceUnitTypeId",
            ChargePerHour = "ChargePerHour",
            ServiceHour = "ServiceHour",
            ServiceCharge = "ServiceCharge",
            ServiceBy = "ServiceBy",
            KmInUse = "KmInUse",
            ServiceDate = "ServiceDate",
            OrderIdService = "OrderIdService",
            ServiceUnitServiceUnitNumber = "ServiceUnitServiceUnitNumber",
            ServiceUnitProductId = "ServiceUnitProductId",
            ServiceUnitOrderUnitId = "ServiceUnitOrderUnitId",
            ServiceUnitCustomerId = "ServiceUnitCustomerId",
            ServiceUnitServiceDate = "ServiceUnitServiceDate",
            ServiceUnitServiceBy = "ServiceUnitServiceBy",
            ServiceUnitSerialNumber = "ServiceUnitSerialNumber",
            ServiceUnitManufactureYear = "ServiceUnitManufactureYear",
            ServiceUnitWarrantyNumber = "ServiceUnitWarrantyNumber",
            ServiceUnitRemark = "ServiceUnitRemark",
            ServiceUnitServiceUnitStatus = "ServiceUnitServiceUnitStatus",
            ServiceUnitHm = "ServiceUnitHm",
            ServiceUnitInsertUserId = "ServiceUnitInsertUserId",
            ServiceUnitInsertDate = "ServiceUnitInsertDate",
            ServiceUnitUpdateUserId = "ServiceUnitUpdateUserId",
            ServiceUnitUpdateDate = "ServiceUnitUpdateDate",
            ServiceUnitIsActive = "ServiceUnitIsActive",
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

