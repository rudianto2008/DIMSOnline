namespace DIMSOnline.Configuration {
    export interface CityForm {
        CityCode: Serenity.StringEditor;
        ProvinceId: Serenity.IntegerEditor;
        IslandId: Serenity.IntegerEditor;
        CityName: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class CityForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.City';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CityForm.init)  {
                CityForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(CityForm, [
                    'CityCode', w0,
                    'ProvinceId', w1,
                    'IslandId', w1,
                    'CityName', w0,
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

