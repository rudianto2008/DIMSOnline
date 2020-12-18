
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductAlternativeGrid extends Serenity.EntityGrid<ProductAlternativeRow, any> {
        protected getColumnsKey() { return 'Configuration.ProductAlternative'; }
        protected getDialogType() { return ProductAlternativeDialog; }
        protected getIdProperty() { return ProductAlternativeRow.idProperty; }
        protected getInsertPermission() { return ProductAlternativeRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductAlternativeRow.localTextPrefix; }
        protected getService() { return ProductAlternativeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}