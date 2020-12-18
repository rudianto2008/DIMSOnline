
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitTypeDetailDialog extends Serenity.EntityDialog<ServiceUnitTypeDetailRow, any> {
        protected getFormKey() { return ServiceUnitTypeDetailForm.formKey; }
        protected getIdProperty() { return ServiceUnitTypeDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceUnitTypeDetailRow.localTextPrefix; }
        protected getNameProperty() { return ServiceUnitTypeDetailRow.nameProperty; }
        protected getService() { return ServiceUnitTypeDetailService.baseUrl; }
        protected getDeletePermission() { return ServiceUnitTypeDetailRow.deletePermission; }
        protected getInsertPermission() { return ServiceUnitTypeDetailRow.insertPermission; }
        protected getUpdatePermission() { return ServiceUnitTypeDetailRow.updatePermission; }

        protected form = new ServiceUnitTypeDetailForm(this.idPrefix);

    }
}