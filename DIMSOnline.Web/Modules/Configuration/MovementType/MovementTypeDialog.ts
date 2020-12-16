
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class MovementTypeDialog extends Serenity.EntityDialog<MovementTypeRow, any> {
        protected getFormKey() { return MovementTypeForm.formKey; }
        protected getIdProperty() { return MovementTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MovementTypeRow.localTextPrefix; }
        protected getNameProperty() { return MovementTypeRow.nameProperty; }
        protected getService() { return MovementTypeService.baseUrl; }
        protected getDeletePermission() { return MovementTypeRow.deletePermission; }
        protected getInsertPermission() { return MovementTypeRow.insertPermission; }
        protected getUpdatePermission() { return MovementTypeRow.updatePermission; }

        protected form = new MovementTypeForm(this.idPrefix);

    }
}