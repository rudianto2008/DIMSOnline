
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitTypePriceGrid extends Serenity.EntityGrid<ServiceUnitTypePriceRow, any> {
        protected getColumnsKey() { return 'Transaction.ServiceUnitTypePrice'; }
        protected getDialogType() { return ServiceUnitTypePriceDialog; }
        protected getIdProperty() { return ServiceUnitTypePriceRow.idProperty; }
        protected getInsertPermission() { return ServiceUnitTypePriceRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiceUnitTypePriceRow.localTextPrefix; }
        protected getService() { return ServiceUnitTypePriceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}