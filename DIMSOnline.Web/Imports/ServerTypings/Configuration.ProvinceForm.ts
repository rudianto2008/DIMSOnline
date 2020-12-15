namespace DIMSOnline.Configuration {
    export interface ProvinceForm {
        ProvinceCode: Serenity.StringEditor;
        IslandId: Serenity.IntegerEditor;
        ProvinceName: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class ProvinceForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.Province';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProvinceForm.init)  {
                ProvinceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ProvinceForm, [
                    'ProvinceCode', w0,
                    'IslandId', w1,
                    'ProvinceName', w0,
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

