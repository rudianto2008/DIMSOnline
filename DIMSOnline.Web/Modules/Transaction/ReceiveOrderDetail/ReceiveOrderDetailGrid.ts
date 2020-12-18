
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ReceiveOrderDetailGrid extends Serenity.EntityGrid<ReceiveOrderDetailRow, any> {
        protected getColumnsKey() { return 'Transaction.ReceiveOrderDetail'; }
        protected getDialogType() { return ReceiveOrderDetailDialog; }
        protected getIdProperty() { return ReceiveOrderDetailRow.idProperty; }
        protected getInsertPermission() { return ReceiveOrderDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return ReceiveOrderDetailRow.localTextPrefix; }
        protected getService() { return ReceiveOrderDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}