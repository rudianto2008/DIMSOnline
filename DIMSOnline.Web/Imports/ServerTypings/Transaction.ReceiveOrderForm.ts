namespace DIMSOnline.Transaction {
    export interface ReceiveOrderForm {
        ProductTypeId: Serenity.IntegerEditor;
        ReceiveOrderNumber: Serenity.StringEditor;
        PurchaseOrderId: Serenity.IntegerEditor;
        ReceiveDate: Serenity.DateEditor;
        ReceiveBy: Serenity.StringEditor;
        AcknowledgeBy: Serenity.StringEditor;
        ReceiveOrderStatus: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        CompanyId: Serenity.IntegerEditor;
    }

    export class ReceiveOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.ReceiveOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReceiveOrderForm.init)  {
                ReceiveOrderForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ReceiveOrderForm, [
                    'ProductTypeId', w0,
                    'ReceiveOrderNumber', w1,
                    'PurchaseOrderId', w0,
                    'ReceiveDate', w2,
                    'ReceiveBy', w1,
                    'AcknowledgeBy', w1,
                    'ReceiveOrderStatus', w1,
                    'InsertUserId', w0,
                    'InsertDate', w2,
                    'UpdateUserId', w0,
                    'UpdateDate', w2,
                    'IsActive', w0,
                    'CompanyId', w0
                ]);
            }
        }
    }
}

