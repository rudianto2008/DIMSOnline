
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitDetailDialog extends Serenity.EntityDialog<ServiceUnitDetailRow, any> {
        protected getFormKey() { return ServiceUnitDetailForm.formKey; }
        protected getIdProperty() { return ServiceUnitDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceUnitDetailRow.localTextPrefix; }
        protected getNameProperty() { return ServiceUnitDetailRow.nameProperty; }
        protected getService() { return ServiceUnitDetailService.baseUrl; }
        protected getDeletePermission() { return ServiceUnitDetailRow.deletePermission; }
        protected getInsertPermission() { return ServiceUnitDetailRow.insertPermission; }
        protected getUpdatePermission() { return ServiceUnitDetailRow.updatePermission; }

        protected form = new ServiceUnitDetailForm(this.idPrefix);

    }
}