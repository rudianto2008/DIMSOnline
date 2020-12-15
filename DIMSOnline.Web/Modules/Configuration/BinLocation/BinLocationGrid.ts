
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class BinLocationGrid extends Serenity.EntityGrid<BinLocationRow, any> {
        protected getColumnsKey() { return 'Configuration.BinLocation'; }
        protected getDialogType() { return BinLocationDialog; }
        protected getIdProperty() { return BinLocationRow.idProperty; }
        protected getInsertPermission() { return BinLocationRow.insertPermission; }
        protected getLocalTextPrefix() { return BinLocationRow.localTextPrefix; }
        protected getService() { return BinLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}