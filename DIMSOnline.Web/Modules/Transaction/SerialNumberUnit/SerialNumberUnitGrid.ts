
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class SerialNumberUnitGrid extends Serenity.EntityGrid<SerialNumberUnitRow, any> {
        protected getColumnsKey() { return 'Transaction.SerialNumberUnit'; }
        protected getDialogType() { return SerialNumberUnitDialog; }
        protected getIdProperty() { return SerialNumberUnitRow.idProperty; }
        protected getInsertPermission() { return SerialNumberUnitRow.insertPermission; }
        protected getLocalTextPrefix() { return SerialNumberUnitRow.localTextPrefix; }
        protected getService() { return SerialNumberUnitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}