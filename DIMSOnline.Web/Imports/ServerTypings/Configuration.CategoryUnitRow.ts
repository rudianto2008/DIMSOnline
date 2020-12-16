namespace DIMSOnline.Configuration {
    export interface CategoryUnitRow {
        CategoryUnitId?: number;
        CategoryUnitName?: string;
        PricePerHour?: number;
    }

    export namespace CategoryUnitRow {
        export const idProperty = 'CategoryUnitId';
        export const nameProperty = 'CategoryUnitName';
        export const localTextPrefix = 'Configuration.CategoryUnit';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            CategoryUnitId = "CategoryUnitId",
            CategoryUnitName = "CategoryUnitName",
            PricePerHour = "PricePerHour"
        }
    }
}

