namespace DIMSOnline.Configuration {
    export interface UnitStockForm {
        UnitStock: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class UnitStockForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.UnitStock';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UnitStockForm.init)  {
                UnitStockForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(UnitStockForm, [
                    'UnitStock', w0,
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

