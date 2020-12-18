namespace DIMSOnline.Configuration {
    export interface ProductTypeForm {
        ProductTypeName: Serenity.StringEditor;
    }

    export class ProductTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.ProductType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductTypeForm.init)  {
                ProductTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProductTypeForm, [
                    'ProductTypeName', w0
                ]);
            }
        }
    }
}

