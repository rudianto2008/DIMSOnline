
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ReceiveOrderGrid extends Serenity.EntityGrid<ReceiveOrderRow, any> {
        protected getColumnsKey() { return 'Transaction.ReceiveOrder'; }
        protected getDialogType() { return ReceiveOrderDialog; }
        protected getIdProperty() { return ReceiveOrderRow.idProperty; }
        protected getInsertPermission() { return ReceiveOrderRow.insertPermission; }
        protected getLocalTextPrefix() { return ReceiveOrderRow.localTextPrefix; }
        protected getService() { return ReceiveOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}