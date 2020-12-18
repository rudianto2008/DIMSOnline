
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProductTypeGrid extends Serenity.EntityGrid<ProductTypeRow, any> {
        protected getColumnsKey() { return 'Configuration.ProductType'; }
        protected getDialogType() { return ProductTypeDialog; }
        protected getIdProperty() { return ProductTypeRow.idProperty; }
        protected getInsertPermission() { return ProductTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductTypeRow.localTextPrefix; }
        protected getService() { return ProductTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}