
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductAlternativeDialog extends Serenity.EntityDialog<ProductAlternativeRow, any> {
        protected getFormKey() { return ProductAlternativeForm.formKey; }
        protected getIdProperty() { return ProductAlternativeRow.idProperty; }
        protected getLocalTextPrefix() { return ProductAlternativeRow.localTextPrefix; }
        protected getService() { return ProductAlternativeService.baseUrl; }
        protected getDeletePermission() { return ProductAlternativeRow.deletePermission; }
        protected getInsertPermission() { return ProductAlternativeRow.insertPermission; }
        protected getUpdatePermission() { return ProductAlternativeRow.updatePermission; }

        protected form = new ProductAlternativeForm(this.idPrefix);

    }
}