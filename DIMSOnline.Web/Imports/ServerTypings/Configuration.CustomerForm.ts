namespace DIMSOnline.Configuration {
    export interface CustomerForm {
        CustomerNumber: Serenity.StringEditor;
        CompanyId: Serenity.IntegerEditor;
        CustomerName: Serenity.StringEditor;
        ProvinceId: Serenity.IntegerEditor;
        CityId: Serenity.IntegerEditor;
        Address: Serenity.StringEditor;
        Pic: Serenity.StringEditor;
        IslandId: Serenity.IntegerEditor;
        PostCode: Serenity.IntegerEditor;
        Phone: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        BirthPlace: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        Npwp: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        DeleteUserId: Serenity.IntegerEditor;
        DeleteDate: Serenity.DateEditor;
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
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(CustomerForm, [
                    'CustomerNumber', w0,
                    'CompanyId', w1,
                    'CustomerName', w0,
                    'ProvinceId', w1,
                    'CityId', w1,
                    'Address', w0,
                    'Pic', w0,
                    'IslandId', w1,
                    'PostCode', w1,
                    'Phone', w0,
                    'ContactPerson', w0,
                    'Fax', w0,
                    'BirthPlace', w0,
                    'BirthDate', w2,
                    'Email', w0,
                    'Npwp', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2,
                    'UpdateUserId', w1,
                    'UpdateDate', w2,
                    'IsActive', w1,
                    'DeleteUserId', w1,
                    'DeleteDate', w2
                ]);
            }
        }
    }
}

