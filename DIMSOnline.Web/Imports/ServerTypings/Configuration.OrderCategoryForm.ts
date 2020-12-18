namespace DIMSOnline.Configuration {
    export interface OrderCategoryForm {
        OrderCategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class OrderCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.OrderCategory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderCategoryForm.init)  {
                OrderCategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OrderCategoryForm, [
                    'OrderCategoryName', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

