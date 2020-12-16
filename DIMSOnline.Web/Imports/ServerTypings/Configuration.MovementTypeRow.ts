namespace DIMSOnline.Configuration {
    export interface MovementTypeRow {
        MovementTypeId?: number;
        MovementTypeName?: string;
        StatusInOut?: string;
    }

    export namespace MovementTypeRow {
        export const idProperty = 'MovementTypeId';
        export const nameProperty = 'MovementTypeName';
        export const localTextPrefix = 'Configuration.MovementType';
        export const deletePermission = 'Administration:Configuration';
        export const insertPermission = 'Administration:Configuration';
        export const readPermission = 'Administration:Configuration';
        export const updatePermission = 'Administration:Configuration';

        export declare const enum Fields {
            MovementTypeId = "MovementTypeId",
            MovementTypeName = "MovementTypeName",
            StatusInOut = "StatusInOut"
        }
    }
}

