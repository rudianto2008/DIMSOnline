
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class MovementStockGrid extends Serenity.EntityGrid<MovementStockRow, any> {
        protected getColumnsKey() { return 'Transaction.MovementStock'; }
        protected getDialogType() { return MovementStockDialog; }
        protected getIdProperty() { return MovementStockRow.idProperty; }
        protected getInsertPermission() { return MovementStockRow.insertPermission; }
        protected getLocalTextPrefix() { return MovementStockRow.localTextPrefix; }
        protected getService() { return MovementStockService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}