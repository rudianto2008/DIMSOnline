namespace DIMSOnline.Transaction {
    export interface ServiceUnitTypePriceRow {
        ServiceUnitTypePriceId?: number;
        CategoryUnitId?: number;
        PricePerHour?: number;
        CategoryUnitCategoryUnitName?: string;
        CategoryUnitPricePerHour?: number;
    }

    export namespace ServiceUnitTypePriceRow {
        export const idProperty = 'ServiceUnitTypePriceId';
        export const localTextPrefix = 'Transaction.ServiceUnitTypePrice';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            ServiceUnitTypePriceId = "ServiceUnitTypePriceId",
            CategoryUnitId = "CategoryUnitId",
            PricePerHour = "PricePerHour",
            CategoryUnitCategoryUnitName = "CategoryUnitCategoryUnitName",
            CategoryUnitPricePerHour = "CategoryUnitPricePerHour"
        }
    }
}

