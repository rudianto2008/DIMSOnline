namespace DIMSOnline.Transaction {
    export interface ServiceUnitTypePriceForm {
        CategoryUnitId: Serenity.IntegerEditor;
        PricePerHour: Serenity.DecimalEditor;
    }

    export class ServiceUnitTypePriceForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.ServiceUnitTypePrice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiceUnitTypePriceForm.init)  {
                ServiceUnitTypePriceForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ServiceUnitTypePriceForm, [
                    'CategoryUnitId', w0,
                    'PricePerHour', w1
                ]);
            }
        }
    }
}

