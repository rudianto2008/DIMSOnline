namespace DIMSOnline.Transaction {
    export interface OrdersForm {
        OrderNumber: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        CustomerId: Serenity.IntegerEditor;
        UserId: Serenity.IntegerEditor;
        ProductTypeId: Serenity.IntegerEditor;
        KmInUse: Serenity.IntegerEditor;
        PaymentService: Serenity.DecimalEditor;
        OrderStatus: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        CompanyId: Serenity.IntegerEditor;
    }

    export class OrdersForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.Orders';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrdersForm.init)  {
                OrdersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(OrdersForm, [
                    'OrderNumber', w0,
                    'OrderDate', w1,
                    'CustomerId', w2,
                    'UserId', w2,
                    'ProductTypeId', w2,
                    'KmInUse', w2,
                    'PaymentService', w3,
                    'OrderStatus', w0,
                    'InsertUserId', w2,
                    'InsertDate', w1,
                    'UpdateUserId', w2,
                    'UpdateDate', w1,
                    'IsActive', w2,
                    'CompanyId', w2
                ]);
            }
        }
    }
}

