
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class CityGrid extends Serenity.EntityGrid<CityRow, any> {
        protected getColumnsKey() { return 'Configuration.City'; }
        protected getDialogType() { return CityDialog; }
        protected getIdProperty() { return CityRow.idProperty; }
        protected getInsertPermission() { return CityRow.insertPermission; }
        protected getLocalTextPrefix() { return CityRow.localTextPrefix; }
        protected getService() { return CityService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}