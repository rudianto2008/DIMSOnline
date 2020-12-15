namespace DIMSOnline.Configuration {
    export interface IslandForm {
        IslandCode: Serenity.StringEditor;
        IslandName: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class IslandForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.Island';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IslandForm.init)  {
                IslandForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(IslandForm, [
                    'IslandCode', w0,
                    'IslandName', w0,
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

