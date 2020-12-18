
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductsLogDialog extends Serenity.EntityDialog<ProductsLogRow, any> {
        protected getFormKey() { return ProductsLogForm.formKey; }
        protected getIdProperty() { return ProductsLogRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsLogRow.localTextPrefix; }
        protected getNameProperty() { return ProductsLogRow.nameProperty; }
        protected getService() { return ProductsLogService.baseUrl; }
        protected getDeletePermission() { return ProductsLogRow.deletePermission; }
        protected getInsertPermission() { return ProductsLogRow.insertPermission; }
        protected getUpdatePermission() { return ProductsLogRow.updatePermission; }

        protected form = new ProductsLogForm(this.idPrefix);

    }
}