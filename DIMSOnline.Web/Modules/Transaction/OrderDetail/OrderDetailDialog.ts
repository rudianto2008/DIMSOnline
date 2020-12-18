
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class OrderDetailDialog extends Serenity.EntityDialog<OrderDetailRow, any> {
        protected getFormKey() { return OrderDetailForm.formKey; }
        protected getIdProperty() { return OrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }
        protected getNameProperty() { return OrderDetailRow.nameProperty; }
        protected getService() { return OrderDetailService.baseUrl; }
        protected getDeletePermission() { return OrderDetailRow.deletePermission; }
        protected getInsertPermission() { return OrderDetailRow.insertPermission; }
        protected getUpdatePermission() { return OrderDetailRow.updatePermission; }

        protected form = new OrderDetailForm(this.idPrefix);

    }
}