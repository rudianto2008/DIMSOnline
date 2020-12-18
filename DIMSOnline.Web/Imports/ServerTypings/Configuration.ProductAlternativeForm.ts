namespace DIMSOnline.Configuration {
    export interface ProductAlternativeForm {
        ProductId: Serenity.IntegerEditor;
        ProductIdAlt: Serenity.IntegerEditor;
        SeqNo: Serenity.IntegerEditor;
        Combine: Serenity.BooleanEditor;
    }

    export class ProductAlternativeForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.ProductAlternative';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductAlternativeForm.init)  {
                ProductAlternativeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(ProductAlternativeForm, [
                    'ProductId', w0,
                    'ProductIdAlt', w0,
                    'SeqNo', w0,
                    'Combine', w1
                ]);
            }
        }
    }
}

