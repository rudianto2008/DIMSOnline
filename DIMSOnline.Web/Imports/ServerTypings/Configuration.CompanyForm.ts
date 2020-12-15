namespace DIMSOnline.Configuration {
    export interface CompanyForm {
        CompanyName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        IslandId: Serenity.IntegerEditor;
        ProvinceId: Serenity.IntegerEditor;
        CityId: Serenity.IntegerEditor;
        OfficeType: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        DeleteUserId: Serenity.IntegerEditor;
        DeleteDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
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
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(CompanyForm, [
                    'CompanyName', w0,
                    'Address', w0,
                    'Fax', w0,
                    'Logo', w0,
                    'Phone', w0,
                    'ContactPerson', w0,
                    'IslandId', w1,
                    'ProvinceId', w1,
                    'CityId', w1,
                    'OfficeType', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2,
                    'UpdateUserId', w1,
                    'UpdateDate', w2,
                    'DeleteUserId', w1,
                    'DeleteDate', w2,
                    'IsActive', w1
                ]);
            }
        }
    }
}

