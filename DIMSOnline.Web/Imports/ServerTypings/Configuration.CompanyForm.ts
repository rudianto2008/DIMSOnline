namespace DIMSOnline.Configuration {
    export interface CompanyForm {
        CompanyName: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
    }

    export class CompanyForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.Company';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompanyForm.init)  {
                CompanyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(CompanyForm, [
                    'CompanyName', w0,
                    'Phone', w0,
                    'ContactPerson', w0,
                    'ProvinceId', w1,
                    'CityId', w1,
                    'Address', w0,
                    'Logo', w0
                ]);
            }
        }
    }
}

