namespace DIMSOnline.Configuration {
    export interface CityForm {
        IslandId: Serenity.LookupEditor;
        ProvinceId: Serenity.LookupEditor;
        CityCode: Serenity.StringEditor;
        CityName: Serenity.StringEditor;
    }

    export class CityForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.City';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CityForm.init)  {
                CityForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CityForm, [
                    'IslandId', w0,
                    'ProvinceId', w0,
                    'CityCode', w1,
                    'CityName', w1
                ]);
            }
        }
    }
}

