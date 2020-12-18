
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductPriceGrid extends Serenity.EntityGrid<ProductPriceRow, any> {
        protected getColumnsKey() { return 'Configuration.ProductPrice'; }
        protected getDialogType() { return ProductPriceDialog; }
        protected getIdProperty() { return ProductPriceRow.idProperty; }
        protected getInsertPermission() { return ProductPriceRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductPriceRow.localTextPrefix; }
        protected getService() { return ProductPriceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}