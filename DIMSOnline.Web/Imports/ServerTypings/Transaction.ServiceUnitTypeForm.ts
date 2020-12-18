namespace DIMSOnline.Transaction {
    export interface ServiceUnitTypeForm {
        CategoryUnitId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        JobCodeNo: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ChargePerHour: Serenity.DecimalEditor;
        ServiceUnitType: Serenity.StringEditor;
        StandartOpTime: Serenity.DecimalEditor;
        Continued: Serenity.BooleanEditor;
    }

    export class ServiceUnitTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.ServiceUnitType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceUnitTypeForm.init)  {
                ServiceUnitTypeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ServiceUnitTypeForm, [
                    'CategoryUnitId', w0,
                    'ProductId', w0,
                    'JobCodeNo', w1,
                    'Description', w1,
                    'ChargePerHour', w2,
                    'ServiceUnitType', w1,
                    'StandartOpTime', w2,
                    'Continued', w3
                ]);
            }
        }
    }
}

