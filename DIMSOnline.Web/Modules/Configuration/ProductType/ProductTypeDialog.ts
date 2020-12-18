
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductTypeDialog extends Serenity.EntityDialog<ProductTypeRow, any> {
        protected getFormKey() { return ProductTypeForm.formKey; }
        protected getIdProperty() { return ProductTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ProductTypeRow.localTextPrefix; }
        protected getNameProperty() { return ProductTypeRow.nameProperty; }
        protected getService() { return ProductTypeService.baseUrl; }
        protected getDeletePermission() { return ProductTypeRow.deletePermission; }
        protected getInsertPermission() { return ProductTypeRow.insertPermission; }
        protected getUpdatePermission() { return ProductTypeRow.updatePermission; }

        protected form = new ProductTypeForm(this.idPrefix);

    }
}