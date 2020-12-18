namespace DIMSOnline.Configuration {
    export interface CompanyForm {
        CompanyName: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        ProvinceId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        Logo: Serenity.ImageUploadEditor;
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
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.ImageUploadEditor;

                Q.initFormType(CompanyForm, [
                    'CompanyName', w0,
                    'Address', w1,
                    'ProvinceId', w2,
                    'CityId', w2,
                    'Phone', w0,
                    'ContactPerson', w0,
                    'Logo', w3
                ]);
            }
        }
    }
}

