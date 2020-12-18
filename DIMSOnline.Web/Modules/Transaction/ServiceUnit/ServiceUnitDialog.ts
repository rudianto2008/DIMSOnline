
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitDialog extends Serenity.EntityDialog<ServiceUnitRow, any> {
        protected getFormKey() { return ServiceUnitForm.formKey; }
        protected getIdProperty() { return ServiceUnitRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceUnitRow.localTextPrefix; }
        protected getNameProperty() { return ServiceUnitRow.nameProperty; }
        protected getService() { return ServiceUnitService.baseUrl; }
        protected getDeletePermission() { return ServiceUnitRow.deletePermission; }
        protected getInsertPermission() { return ServiceUnitRow.insertPermission; }
        protected getUpdatePermission() { return ServiceUnitRow.updatePermission; }

        protected form = new ServiceUnitForm(this.idPrefix);

    }
}