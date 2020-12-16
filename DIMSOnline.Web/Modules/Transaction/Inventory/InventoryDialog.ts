
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class InventoryDialog extends Serenity.EntityDialog<InventoryRow, any> {
        protected getFormKey() { return InventoryForm.formKey; }
        protected getIdProperty() { return InventoryRow.idProperty; }
        protected getLocalTextPrefix() { return InventoryRow.localTextPrefix; }
        protected getNameProperty() { return InventoryRow.nameProperty; }
        protected getService() { return InventoryService.baseUrl; }
        protected getDeletePermission() { return InventoryRow.deletePermission; }
        protected getInsertPermission() { return InventoryRow.insertPermission; }
        protected getUpdatePermission() { return InventoryRow.updatePermission; }

        protected form = new InventoryForm(this.idPrefix);

    }
}