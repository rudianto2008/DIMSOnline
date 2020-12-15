
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class IslandDialog extends Serenity.EntityDialog<IslandRow, any> {
        protected getFormKey() { return IslandForm.formKey; }
        protected getIdProperty() { return IslandRow.idProperty; }
        protected getLocalTextPrefix() { return IslandRow.localTextPrefix; }
        protected getNameProperty() { return IslandRow.nameProperty; }
        protected getService() { return IslandService.baseUrl; }
        protected getDeletePermission() { return IslandRow.deletePermission; }
        protected getInsertPermission() { return IslandRow.insertPermission; }
        protected getUpdatePermission() { return IslandRow.updatePermission; }

        protected form = new IslandForm(this.idPrefix);

    }
}