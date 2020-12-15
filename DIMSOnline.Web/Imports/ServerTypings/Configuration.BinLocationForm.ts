namespace DIMSOnline.Configuration {
    export interface BinLocationForm {
        BinLocation: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class BinLocationForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.BinLocation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BinLocationForm.init)  {
                BinLocationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(BinLocationForm, [
                    'BinLocation', w0,
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

