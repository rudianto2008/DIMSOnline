namespace DIMSOnline.Transaction {
    export interface SerialNumberUnitRow {
        SerialNumberUnitId?: number;
        ReceiveOrderId?: number;
        CategoryUnitId?: number;
        SerialNumber?: string;
        ManufactureYear?: string;
        WarrantyNumber?: string;
        Available?: boolean;
        ReceiveOrderProductTypeId?: number;
        ReceiveOrderReceiveOrderNumber?: string;
        ReceiveOrderPurchaseOrderId?: number;
        ReceiveOrderReceiveDate?: string;
        ReceiveOrderReceiveBy?: string;
        ReceiveOrderAcknowledgeBy?: string;
        ReceiveOrderReceiveOrderStatus?: string;
        ReceiveOrderInsertUserId?: number;
        ReceiveOrderInsertDate?: string;
        ReceiveOrderUpdateUserId?: number;
        ReceiveOrderUpdateDate?: string;
        ReceiveOrderIsActive?: number;
        ReceiveOrderCompanyId?: number;
    }

    export namespace SerialNumberUnitRow {
        export const idProperty = 'SerialNumberUnitId';
        export const nameProperty = 'SerialNumber';
        export const localTextPrefix = 'Transaction.SerialNumberUnit';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            SerialNumberUnitId = "SerialNumberUnitId",
            ReceiveOrderId = "ReceiveOrderId",
            CategoryUnitId = "CategoryUnitId",
            SerialNumber = "SerialNumber",
            ManufactureYear = "ManufactureYear",
            WarrantyNumber = "WarrantyNumber",
            Available = "Available",
            ReceiveOrderProductTypeId = "ReceiveOrderProductTypeId",
            ReceiveOrderReceiveOrderNumber = "ReceiveOrderReceiveOrderNumber",
            ReceiveOrderPurchaseOrderId = "ReceiveOrderPurchaseOrderId",
            ReceiveOrderReceiveDate = "ReceiveOrderReceiveDate",
            ReceiveOrderReceiveBy = "ReceiveOrderReceiveBy",
            ReceiveOrderAcknowledgeBy = "ReceiveOrderAcknowledgeBy",
            ReceiveOrderReceiveOrderStatus = "ReceiveOrderReceiveOrderStatus",
            ReceiveOrderInsertUserId = "ReceiveOrderInsertUserId",
            ReceiveOrderInsertDate = "ReceiveOrderInsertDate",
            ReceiveOrderUpdateUserId = "ReceiveOrderUpdateUserId",
            ReceiveOrderUpdateDate = "ReceiveOrderUpdateDate",
            ReceiveOrderIsActive = "ReceiveOrderIsActive",
            ReceiveOrderCompanyId = "ReceiveOrderCompanyId"
        }
    }
}

