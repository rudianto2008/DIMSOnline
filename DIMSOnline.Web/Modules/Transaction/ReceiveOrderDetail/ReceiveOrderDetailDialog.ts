
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ReceiveOrderDetailDialog extends Serenity.EntityDialog<ReceiveOrderDetailRow, any> {
        protected getFormKey() { return ReceiveOrderDetailForm.formKey; }
        protected getIdProperty() { return ReceiveOrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiveOrderDetailRow.localTextPrefix; }
        protected getService() { return ReceiveOrderDetailService.baseUrl; }
        protected getDeletePermission() { return ReceiveOrderDetailRow.deletePermission; }
        protected getInsertPermission() { return ReceiveOrderDetailRow.insertPermission; }
        protected getUpdatePermission() { return ReceiveOrderDetailRow.updatePermission; }

        protected form = new ReceiveOrderDetailForm(this.idPrefix);

    }
}