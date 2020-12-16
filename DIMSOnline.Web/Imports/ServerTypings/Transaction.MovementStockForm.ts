namespace DIMSOnline.Transaction {
    export interface MovementStockForm {
        MovementTypeId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        MovementQty: Serenity.IntegerEditor;
        MovementStockNumber: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class MovementStockForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.MovementStock';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MovementStockForm.init)  {
                MovementStockForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MovementStockForm, [
                    'MovementTypeId', w0,
                    'ProductId', w0,
                    'MovementQty', w0,
                    'MovementStockNumber', w1,
                    'Description', w1,
                    'InsertUserId', w0,
                    'InsertDate', w2,
                    'UpdateUserId', w0,
                    'UpdateDate', w2,
                    'IsActive', w0
                ]);
            }
        }
    }
}

