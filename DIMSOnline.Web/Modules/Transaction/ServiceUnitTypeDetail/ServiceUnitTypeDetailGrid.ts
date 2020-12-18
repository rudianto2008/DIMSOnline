
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitTypeDetailGrid extends Serenity.EntityGrid<ServiceUnitTypeDetailRow, any> {
        protected getColumnsKey() { return 'Transaction.ServiceUnitTypeDetail'; }
        protected getDialogType() { return ServiceUnitTypeDetailDialog; }
        protected getIdProperty() { return ServiceUnitTypeDetailRow.idProperty; }
        protected getInsertPermission() { return ServiceUnitTypeDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return ServiceUnitTypeDetailRow.localTextPrefix; }
        protected getService() { return ServiceUnitTypeDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}