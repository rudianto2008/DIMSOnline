
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductPriceDialog extends Serenity.EntityDialog<ProductPriceRow, any> {
        protected getFormKey() { return ProductPriceForm.formKey; }
        protected getIdProperty() { return ProductPriceRow.idProperty; }
        protected getLocalTextPrefix() { return ProductPriceRow.localTextPrefix; }
        protected getNameProperty() { return ProductPriceRow.nameProperty; }
        protected getService() { return ProductPriceService.baseUrl; }
        protected getDeletePermission() { return ProductPriceRow.deletePermission; }
        protected getInsertPermission() { return ProductPriceRow.insertPermission; }
        protected getUpdatePermission() { return ProductPriceRow.updatePermission; }

        protected form = new ProductPriceForm(this.idPrefix);

    }
}