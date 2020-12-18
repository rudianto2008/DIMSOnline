
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitDetailGrid extends Serenity.EntityGrid<ServiceUnitDetailRow, any> {
        protected getColumnsKey() { return 'Transaction.ServiceUnitDetail'; }
        protected getDialogType() { return ServiceUnitDetailDialog; }
        protected getIdProperty() { return ServiceUnitDetailRow.idProperty; }
        protected getInsertPermission() { return ServiceUnitDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiceUnitDetailRow.localTextPrefix; }
        protected getService() { return ServiceUnitDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}