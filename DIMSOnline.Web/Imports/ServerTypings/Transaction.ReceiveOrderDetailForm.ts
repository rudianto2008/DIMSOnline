namespace DIMSOnline.Transaction {
    export interface ReceiveOrderDetailForm {
        ReceiveOrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        PoQty: Serenity.IntegerEditor;
        ReceiveQty: Serenity.IntegerEditor;
        BackOrderQty: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        ReceiveComplete: Serenity.BooleanEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class ReceiveOrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.ReceiveOrderDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReceiveOrderDetailForm.init)  {
                ReceiveOrderDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(ReceiveOrderDetailForm, [
                    'ReceiveOrderId', w0,
                    'ProductId', w0,
                    'PoQty', w0,
                    'ReceiveQty', w0,
                    'BackOrderQty', w0,
                    'Price', w1,
                    'ReceiveComplete', w2,
                    'InsertUserId', w0,
                    'InsertDate', w3,
                    'UpdateUserId', w0,
                    'UpdateDate', w3,
                    'IsActive', w0
                ]);
            }
        }
    }
}

