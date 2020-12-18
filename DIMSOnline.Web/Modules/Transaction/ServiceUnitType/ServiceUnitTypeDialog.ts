
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitTypeDialog extends Serenity.EntityDialog<ServiceUnitTypeRow, any> {
        protected getFormKey() { return ServiceUnitTypeForm.formKey; }
        protected getIdProperty() { return ServiceUnitTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceUnitTypeRow.localTextPrefix; }
        protected getNameProperty() { return ServiceUnitTypeRow.nameProperty; }
        protected getService() { return ServiceUnitTypeService.baseUrl; }
        protected getDeletePermission() { return ServiceUnitTypeRow.deletePermission; }
        protected getInsertPermission() { return ServiceUnitTypeRow.insertPermission; }
        protected getUpdatePermission() { return ServiceUnitTypeRow.updatePermission; }

        protected form = new ServiceUnitTypeForm(this.idPrefix);

    }
}