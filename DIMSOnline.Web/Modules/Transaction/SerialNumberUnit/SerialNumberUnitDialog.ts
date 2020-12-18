
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class SerialNumberUnitDialog extends Serenity.EntityDialog<SerialNumberUnitRow, any> {
        protected getFormKey() { return SerialNumberUnitForm.formKey; }
        protected getIdProperty() { return SerialNumberUnitRow.idProperty; }
        protected getLocalTextPrefix() { return SerialNumberUnitRow.localTextPrefix; }
        protected getNameProperty() { return SerialNumberUnitRow.nameProperty; }
        protected getService() { return SerialNumberUnitService.baseUrl; }
        protected getDeletePermission() { return SerialNumberUnitRow.deletePermission; }
        protected getInsertPermission() { return SerialNumberUnitRow.insertPermission; }
        protected getUpdatePermission() { return SerialNumberUnitRow.updatePermission; }

        protected form = new SerialNumberUnitForm(this.idPrefix);

    }
}