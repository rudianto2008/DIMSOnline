
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitGrid extends Serenity.EntityGrid<ServiceUnitRow, any> {
        protected getColumnsKey() { return 'Transaction.ServiceUnit'; }
        protected getDialogType() { return ServiceUnitDialog; }
        protected getIdProperty() { return ServiceUnitRow.idProperty; }
        protected getInsertPermission() { return ServiceUnitRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiceUnitRow.localTextPrefix; }
        protected getService() { return ServiceUnitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}