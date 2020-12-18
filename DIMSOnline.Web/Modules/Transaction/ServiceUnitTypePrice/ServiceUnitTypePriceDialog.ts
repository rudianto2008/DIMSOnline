
namespace DIMSOnline.Transaction {

    @Serenity.Decorators.registerClass()
    export class ServiceUnitTypePriceDialog extends Serenity.EntityDialog<ServiceUnitTypePriceRow, any> {
        protected getFormKey() { return ServiceUnitTypePriceForm.formKey; }
        protected getIdProperty() { return ServiceUnitTypePriceRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceUnitTypePriceRow.localTextPrefix; }
        protected getService() { return ServiceUnitTypePriceService.baseUrl; }
        protected getDeletePermission() { return ServiceUnitTypePriceRow.deletePermission; }
        protected getInsertPermission() { return ServiceUnitTypePriceRow.insertPermission; }
        protected getUpdatePermission() { return ServiceUnitTypePriceRow.updatePermission; }

        protected form = new ServiceUnitTypePriceForm(this.idPrefix);

    }
}