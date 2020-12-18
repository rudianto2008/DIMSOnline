namespace DIMSOnline.Configuration {
    export interface CustomerForm {
        CustomerNumber: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        BirthPlace: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Npwp: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        PostCode: Serenity.IntegerEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(CustomerForm, [
                    'CustomerNumber', w0,
                    'CustomerName', w0,
                    'BirthPlace', w0,
                    'BirthDate', w1,
                    'Npwp', w0,
                    'ContactPerson', w0,
                    'Phone', w0,
                    'Email', w0,
                    'ProvinceId', w2,
                    'CityId', w2,
                    'Address', w0,
                    'PostCode', w3
                ]);
            }
        }
    }
}

