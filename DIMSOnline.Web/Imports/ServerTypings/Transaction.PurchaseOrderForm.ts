namespace DIMSOnline.Transaction {
    export interface PurchaseOrderForm {
        PurchaseOrderNumber: Serenity.StringEditor;
        CompanyId: Serenity.IntegerEditor;
        PurchaseOrderDate: Serenity.DateEditor;
        OrderCategoryId: Serenity.IntegerEditor;
        ProductTypeId: Serenity.IntegerEditor;
        PickupPoint: Serenity.StringEditor;
        PurchaseOrderStatus: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.PurchaseOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderForm.init)  {
                PurchaseOrderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(PurchaseOrderForm, [
                    'PurchaseOrderNumber', w0,
                    'CompanyId', w1,
                    'PurchaseOrderDate', w2,
                    'OrderCategoryId', w1,
                    'ProductTypeId', w1,
                    'PickupPoint', w0,
                    'PurchaseOrderStatus', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2,
                    'UpdateUserId', w1,
                    'UpdateDate', w2,
                    'IsActive', w1
                ]);
            }
        }
    }
}

