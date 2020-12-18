namespace DIMSOnline.Transaction {
    export interface ServiceUnitTypeDetailForm {
        ServiceUnitId: Serenity.IntegerEditor;
        CategoryUnitId: Serenity.IntegerEditor;
        JobCodeNo: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        StandartOpTime: Serenity.DecimalEditor;
        ChargePerHour: Serenity.DecimalEditor;
        ServiceHour: Serenity.IntegerEditor;
        TotalCharge: Serenity.DecimalEditor;
        ServiceUnitTypeId: Serenity.IntegerEditor;
    }

    export class ServiceUnitTypeDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.ServiceUnitTypeDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceUnitTypeDetailForm.init)  {
                ServiceUnitTypeDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ServiceUnitTypeDetailForm, [
                    'ServiceUnitId', w0,
                    'CategoryUnitId', w0,
                    'JobCodeNo', w1,
                    'Description', w1,
                    'StandartOpTime', w2,
                    'ChargePerHour', w2,
                    'ServiceHour', w0,
                    'TotalCharge', w2,
                    'ServiceUnitTypeId', w0
                ]);
            }
        }
    }
}

