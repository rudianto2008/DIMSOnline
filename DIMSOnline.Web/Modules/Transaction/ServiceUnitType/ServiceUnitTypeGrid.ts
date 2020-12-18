
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitTypeGrid extends Serenity.EntityGrid<ServiceUnitTypeRow, any> {
        protected getColumnsKey() { return 'Transaction.ServiceUnitType'; }
        protected getDialogType() { return ServiceUnitTypeDialog; }
        protected getIdProperty() { return ServiceUnitTypeRow.idProperty; }
        protected getInsertPermission() { return ServiceUnitTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiceUnitTypeRow.localTextPrefix; }
        protected getService() { return ServiceUnitTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}