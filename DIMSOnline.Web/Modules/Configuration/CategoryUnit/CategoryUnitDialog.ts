
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class CategoryUnitDialog extends Serenity.EntityDialog<CategoryUnitRow, any> {
        protected getFormKey() { return CategoryUnitForm.formKey; }
        protected getIdProperty() { return CategoryUnitRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryUnitRow.localTextPrefix; }
        protected getNameProperty() { return CategoryUnitRow.nameProperty; }
        protected getService() { return CategoryUnitService.baseUrl; }
        protected getDeletePermission() { return CategoryUnitRow.deletePermission; }
        protected getInsertPermission() { return CategoryUnitRow.insertPermission; }
        protected getUpdatePermission() { return CategoryUnitRow.updatePermission; }

        protected form = new CategoryUnitForm(this.idPrefix);

    }
}