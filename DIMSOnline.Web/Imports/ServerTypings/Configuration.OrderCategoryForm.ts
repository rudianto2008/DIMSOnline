namespace DIMSOnline.Configuration {
    export interface OrderCategoryForm {
        OrderCategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
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
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(OrderCategoryForm, [
                    'OrderCategoryName', w0,
                    'Description', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2,
                    'UpdateUserId', w1,
                    'UpdateDate', w2,
                    'IsActive', w1
                ]);
            }
        }
    }
}

