
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class ProvinceGrid extends Serenity.EntityGrid<ProvinceRow, any> {
        protected getColumnsKey() { return 'Configuration.Province'; }
        protected getDialogType() { return ProvinceDialog; }
        protected getIdProperty() { return ProvinceRow.idProperty; }
        protected getInsertPermission() { return ProvinceRow.insertPermission; }
        protected getLocalTextPrefix() { return ProvinceRow.localTextPrefix; }
        protected getService() { return ProvinceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}