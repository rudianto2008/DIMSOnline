
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class UnitStockGrid extends Serenity.EntityGrid<UnitStockRow, any> {
        protected getColumnsKey() { return 'Configuration.UnitStock'; }
        protected getDialogType() { return UnitStockDialog; }
        protected getIdProperty() { return UnitStockRow.idProperty; }
        protected getInsertPermission() { return UnitStockRow.insertPermission; }
        protected getLocalTextPrefix() { return UnitStockRow.localTextPrefix; }
        protected getService() { return UnitStockService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}