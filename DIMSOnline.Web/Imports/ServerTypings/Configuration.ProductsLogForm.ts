namespace DIMSOnline.Configuration {
    export interface ProductsLogForm {
        ProductId: Serenity.IntegerEditor;
        ModelName: Serenity.StringEditor;
        UnitStock: Serenity.StringEditor;
        PartNumber: Serenity.StringEditor;
        ProductTypeId: Serenity.IntegerEditor;
        Continued: Serenity.BooleanEditor;
        ProductImage: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        BinLocation: Serenity.StringEditor;
        OperationType: Serenity.IntegerEditor;
        ChangingUserId: Serenity.IntegerEditor;
        ValidFrom: Serenity.DateEditor;
        ValidUntil: Serenity.DateEditor;
    }

    export class ProductsLogForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.ProductsLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsLogForm.init)  {
                ProductsLogForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(ProductsLogForm, [
                    'ProductId', w0,
                    'ModelName', w1,
                    'UnitStock', w1,
                    'PartNumber', w1,
                    'ProductTypeId', w0,
                    'Continued', w2,
                    'ProductImage', w1,
                    'Description', w1,
                    'BinLocation', w1,
                    'OperationType', w0,
                    'ChangingUserId', w0,
                    'ValidFrom', w3,
                    'ValidUntil', w3
                ]);
            }
        }
    }
}

