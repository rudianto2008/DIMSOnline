
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class OrderCategoryGrid extends Serenity.EntityGrid<OrderCategoryRow, any> {
        protected getColumnsKey() { return 'Configuration.OrderCategory'; }
        protected getDialogType() { return OrderCategoryDialog; }
        protected getIdProperty() { return OrderCategoryRow.idProperty; }
        protected getInsertPermission() { return OrderCategoryRow.insertPermission; }
        protected getLocalTextPrefix() { return OrderCategoryRow.localTextPrefix; }
        protected getService() { return OrderCategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}