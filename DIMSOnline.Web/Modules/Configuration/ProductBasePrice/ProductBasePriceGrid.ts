
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductBasePriceGrid extends Serenity.EntityGrid<ProductBasePriceRow, any> {
        protected getColumnsKey() { return 'Configuration.ProductBasePrice'; }
        protected getDialogType() { return ProductBasePriceDialog; }
        protected getIdProperty() { return ProductBasePriceRow.idProperty; }
        protected getInsertPermission() { return ProductBasePriceRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductBasePriceRow.localTextPrefix; }
        protected getService() { return ProductBasePriceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}