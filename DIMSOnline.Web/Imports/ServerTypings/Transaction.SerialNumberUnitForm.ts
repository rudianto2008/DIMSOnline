namespace DIMSOnline.Transaction {
    export interface SerialNumberUnitForm {
        ReceiveOrderId: Serenity.IntegerEditor;
        CategoryUnitId: Serenity.IntegerEditor;
        SerialNumber: Serenity.StringEditor;
        ManufactureYear: Serenity.StringEditor;
        WarrantyNumber: Serenity.StringEditor;
        Available: Serenity.BooleanEditor;
    }

    export class SerialNumberUnitForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.SerialNumberUnit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SerialNumberUnitForm.init)  {
                SerialNumberUnitForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(SerialNumberUnitForm, [
                    'ReceiveOrderId', w0,
                    'CategoryUnitId', w0,
                    'SerialNumber', w1,
                    'ManufactureYear', w1,
                    'WarrantyNumber', w1,
                    'Available', w2
                ]);
            }
        }
    }
}

