
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class OrderCategoryDialog extends Serenity.EntityDialog<OrderCategoryRow, any> {
        protected getFormKey() { return OrderCategoryForm.formKey; }
        protected getIdProperty() { return OrderCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return OrderCategoryRow.localTextPrefix; }
        protected getNameProperty() { return OrderCategoryRow.nameProperty; }
        protected getService() { return OrderCategoryService.baseUrl; }
        protected getDeletePermission() { return OrderCategoryRow.deletePermission; }
        protected getInsertPermission() { return OrderCategoryRow.insertPermission; }
        protected getUpdatePermission() { return OrderCategoryRow.updatePermission; }

        protected form = new OrderCategoryForm(this.idPrefix);

    }
}