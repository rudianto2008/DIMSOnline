
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class MovementTypeGrid extends Serenity.EntityGrid<MovementTypeRow, any> {
        protected getColumnsKey() { return 'Configuration.MovementType'; }
        protected getDialogType() { return MovementTypeDialog; }
        protected getIdProperty() { return MovementTypeRow.idProperty; }
        protected getInsertPermission() { return MovementTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return MovementTypeRow.localTextPrefix; }
        protected getService() { return MovementTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}