
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class InventoryGrid extends Serenity.EntityGrid<InventoryRow, any> {
        protected getColumnsKey() { return 'Transaction.Inventory'; }
        protected getDialogType() { return InventoryDialog; }
        protected getIdProperty() { return InventoryRow.idProperty; }
        protected getInsertPermission() { return InventoryRow.insertPermission; }
        protected getLocalTextPrefix() { return InventoryRow.localTextPrefix; }
        protected getService() { return InventoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}