
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class MovementStockDialog extends Serenity.EntityDialog<MovementStockRow, any> {
        protected getFormKey() { return MovementStockForm.formKey; }
        protected getIdProperty() { return MovementStockRow.idProperty; }
        protected getLocalTextPrefix() { return MovementStockRow.localTextPrefix; }
        protected getNameProperty() { return MovementStockRow.nameProperty; }
        protected getService() { return MovementStockService.baseUrl; }
        protected getDeletePermission() { return MovementStockRow.deletePermission; }
        protected getInsertPermission() { return MovementStockRow.insertPermission; }
        protected getUpdatePermission() { return MovementStockRow.updatePermission; }

        protected form = new MovementStockForm(this.idPrefix);

    }
}