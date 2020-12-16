
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class CategoryUnitGrid extends Serenity.EntityGrid<CategoryUnitRow, any> {
        protected getColumnsKey() { return 'Configuration.CategoryUnit'; }
        protected getDialogType() { return CategoryUnitDialog; }
        protected getIdProperty() { return CategoryUnitRow.idProperty; }
        protected getInsertPermission() { return CategoryUnitRow.insertPermission; }
        protected getLocalTextPrefix() { return CategoryUnitRow.localTextPrefix; }
        protected getService() { return CategoryUnitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}