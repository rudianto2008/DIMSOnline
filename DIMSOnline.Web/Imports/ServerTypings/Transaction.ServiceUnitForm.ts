namespace DIMSOnline.Transaction {
    export interface ServiceUnitForm {
        ServiceUnitNumber: Serenity.StringEditor;
        ProductId: Serenity.IntegerEditor;
        OrderUnitId: Serenity.IntegerEditor;
        CustomerId: Serenity.IntegerEditor;
        ServiceDate: Serenity.DateEditor;
        ServiceBy: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        ManufactureYear: Serenity.StringEditor;
        WarrantyNumber: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        ServiceUnitStatus: Serenity.StringEditor;
        Hm: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class ServiceUnitForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.ServiceUnit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceUnitForm.init)  {
                ServiceUnitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ServiceUnitForm, [
                    'ServiceUnitNumber', w0,
                    'ProductId', w1,
                    'OrderUnitId', w1,
                    'CustomerId', w1,
                    'ServiceDate', w2,
                    'ServiceBy', w0,
                    'SerialNumber', w0,
                    'ManufactureYear', w0,
                    'WarrantyNumber', w0,
                    'Remark', w0,
                    'ServiceUnitStatus', w0,
                    'Hm', w0,
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

