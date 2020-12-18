
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductsLogGrid extends Serenity.EntityGrid<ProductsLogRow, any> {
        protected getColumnsKey() { return 'Configuration.ProductsLog'; }
        protected getDialogType() { return ProductsLogDialog; }
        protected getIdProperty() { return ProductsLogRow.idProperty; }
        protected getInsertPermission() { return ProductsLogRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductsLogRow.localTextPrefix; }
        protected getService() { return ProductsLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}