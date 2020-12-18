namespace DIMSOnline.Configuration {
    export interface ProductPriceForm {
        ProductPriceNumber: Serenity.StringEditor;
        ProductId: Serenity.IntegerEditor;
        OrderCategoryId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Continued: Serenity.BooleanEditor;
    }

    export class ProductPriceForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.ProductPrice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductPriceForm.init)  {
                ProductPriceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ProductPriceForm, [
                    'ProductPriceNumber', w0,
                    'ProductId', w1,
                    'OrderCategoryId', w1,
                    'Price', w2,
                    'Continued', w3
                ]);
            }
        }
    }
}

