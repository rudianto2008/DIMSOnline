
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ReceiveOrderDialog extends Serenity.EntityDialog<ReceiveOrderRow, any> {
        protected getFormKey() { return ReceiveOrderForm.formKey; }
        protected getIdProperty() { return ReceiveOrderRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiveOrderRow.localTextPrefix; }
        protected getNameProperty() { return ReceiveOrderRow.nameProperty; }
        protected getService() { return ReceiveOrderService.baseUrl; }
        protected getDeletePermission() { return ReceiveOrderRow.deletePermission; }
        protected getInsertPermission() { return ReceiveOrderRow.insertPermission; }
        protected getUpdatePermission() { return ReceiveOrderRow.updatePermission; }

        protected form = new ReceiveOrderForm(this.idPrefix);

    }
}