
namespace DIMSOnline.Configuration {

    @Serenity.Decorators.registerClass()
    export class BinLocationDialog extends Serenity.EntityDialog<BinLocationRow, any> {
        protected getFormKey() { return BinLocationForm.formKey; }
        protected getIdProperty() { return BinLocationRow.idProperty; }
        protected getLocalTextPrefix() { return BinLocationRow.localTextPrefix; }
        protected getNameProperty() { return BinLocationRow.nameProperty; }
        protected getService() { return BinLocationService.baseUrl; }
        protected getDeletePermission() { return BinLocationRow.deletePermission; }
        protected getInsertPermission() { return BinLocationRow.insertPermission; }
        protected getUpdatePermission() { return BinLocationRow.updatePermission; }

        protected form = new BinLocationForm(this.idPrefix);

    }
}