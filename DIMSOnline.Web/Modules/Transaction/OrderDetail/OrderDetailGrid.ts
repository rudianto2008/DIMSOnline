
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class OrderDetailGrid extends Serenity.EntityGrid<OrderDetailRow, any> {
        protected getColumnsKey() { return 'Transaction.OrderDetail'; }
        protected getDialogType() { return OrderDetailDialog; }
        protected getIdProperty() { return OrderDetailRow.idProperty; }
        protected getInsertPermission() { return OrderDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }
        protected getService() { return OrderDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}