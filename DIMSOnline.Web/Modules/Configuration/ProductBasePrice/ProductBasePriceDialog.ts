
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductBasePriceDialog extends Serenity.EntityDialog<ProductBasePriceRow, any> {
        protected getFormKey() { return ProductBasePriceForm.formKey; }
        protected getIdProperty() { return ProductBasePriceRow.idProperty; }
        protected getLocalTextPrefix() { return ProductBasePriceRow.localTextPrefix; }
        protected getNameProperty() { return ProductBasePriceRow.nameProperty; }
        protected getService() { return ProductBasePriceService.baseUrl; }
        protected getDeletePermission() { return ProductBasePriceRow.deletePermission; }
        protected getInsertPermission() { return ProductBasePriceRow.insertPermission; }
        protected getUpdatePermission() { return ProductBasePriceRow.updatePermission; }

        protected form = new ProductBasePriceForm(this.idPrefix);

    }
}