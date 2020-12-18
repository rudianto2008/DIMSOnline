namespace DIMSOnline.Transaction {
    export interface ServiceUnitDetailForm {
        ServiceUnitId: Serenity.IntegerEditor;
        ServiceUnitTypeId: Serenity.IntegerEditor;
        ChargePerHour: Serenity.DecimalEditor;
        ServiceHour: Serenity.IntegerEditor;
        ServiceCharge: Serenity.DecimalEditor;
        ServiceBy: Serenity.StringEditor;
        KmInUse: Serenity.IntegerEditor;
        ServiceDate: Serenity.DateEditor;
        OrderIdService: Serenity.IntegerEditor;
    }

    export class ServiceUnitDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.ServiceUnitDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceUnitDetailForm.init)  {
                ServiceUnitDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;

                Q.initFormType(ServiceUnitDetailForm, [
                    'ServiceUnitId', w0,
                    'ServiceUnitTypeId', w0,
                    'ChargePerHour', w1,
                    'ServiceHour', w0,
                    'ServiceCharge', w1,
                    'ServiceBy', w2,
                    'KmInUse', w0,
                    'ServiceDate', w3,
                    'OrderIdService', w0
                ]);
            }
        }
    }
}

