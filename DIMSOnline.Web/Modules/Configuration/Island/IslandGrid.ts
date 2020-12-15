
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class IslandGrid extends Serenity.EntityGrid<IslandRow, any> {
        protected getColumnsKey() { return 'Configuration.Island'; }
        protected getDialogType() { return IslandDialog; }
        protected getIdProperty() { return IslandRow.idProperty; }
        protected getInsertPermission() { return IslandRow.insertPermission; }
        protected getLocalTextPrefix() { return IslandRow.localTextPrefix; }
        protected getService() { return IslandService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}