namespace DIMSOnline.Configuration {
    export interface ProductBasePriceForm {
        ProductBasePriceNumber: Serenity.StringEditor;
        ProductId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        ActualPrice: Serenity.DecimalEditor;
        Continued: Serenity.BooleanEditor;
    }

    export class ProductBasePriceForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.ProductBasePrice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductBasePriceForm.init)  {
                ProductBasePriceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ProductBasePriceForm, [
                    'ProductBasePriceNumber', w0,
                    'ProductId', w1,
                    'Price', w2,
                    'ActualPrice', w2,
                    'Continued', w3
                ]);
            }
        }
    }
}

