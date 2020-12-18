
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class UnitStockDialog extends Serenity.EntityDialog<UnitStockRow, any> {
        protected getFormKey() { return UnitStockForm.formKey; }
        protected getIdProperty() { return UnitStockRow.idProperty; }
        protected getLocalTextPrefix() { return UnitStockRow.localTextPrefix; }
        protected getNameProperty() { return UnitStockRow.nameProperty; }
        protected getService() { return UnitStockService.baseUrl; }
        protected getDeletePermission() { return UnitStockRow.deletePermission; }
        protected getInsertPermission() { return UnitStockRow.insertPermission; }
        protected getUpdatePermission() { return UnitStockRow.updatePermission; }

        protected form = new UnitStockForm(this.idPrefix);

    }
}