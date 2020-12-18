namespace DIMSOnline.Transaction {
    export interface OrderDetailForm {
        OrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        OrderQty: Serenity.IntegerEditor;
        Stock: Serenity.IntegerEditor;
        ProductBasePriceId: Serenity.IntegerEditor;
        ProductBasePriceNumber: Serenity.StringEditor;
        OrderCategoryId: Serenity.IntegerEditor;
        BasePrice: Serenity.DecimalEditor;
        ActualPrice: Serenity.DecimalEditor;
        GrossAmount: Serenity.DecimalEditor;
        DiscountPercent: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        Ppn: Serenity.DecimalEditor;
        KmInUse: Serenity.IntegerEditor;
        ServiceQuantity: Serenity.IntegerEditor;
        SerialNumber: Serenity.StringEditor;
        ManufactureYear: Serenity.StringEditor;
        WarrantyNumber: Serenity.StringEditor;
        ServiceUnitId: Serenity.IntegerEditor;
        AsAlternativeItem: Serenity.BooleanEditor;
        ParentItemId: Serenity.IntegerEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        CancellationDate: Serenity.DateEditor;
        CancellationBy: Serenity.IntegerEditor;
    }

    export class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.OrderDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderDetailForm.init)  {
                OrderDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateEditor;

                Q.initFormType(OrderDetailForm, [
                    'OrderId', w0,
                    'ProductId', w0,
                    'OrderQty', w0,
                    'Stock', w0,
                    'ProductBasePriceId', w0,
                    'ProductBasePriceNumber', w1,
                    'OrderCategoryId', w0,
                    'BasePrice', w2,
                    'ActualPrice', w2,
                    'GrossAmount', w2,
                    'DiscountPercent', w0,
                    'Discount', w2,
                    'Total', w2,
                    'Ppn', w2,
                    'KmInUse', w0,
                    'ServiceQuantity', w0,
                    'SerialNumber', w1,
                    'ManufactureYear', w1,
                    'WarrantyNumber', w1,
                    'ServiceUnitId', w0,
                    'AsAlternativeItem', w3,
                    'ParentItemId', w0,
                    'InsertUserId', w0,
                    'InsertDate', w4,
                    'UpdateUserId', w0,
                    'UpdateDate', w4,
                    'IsActive', w0,
                    'CancellationDate', w4,
                    'CancellationBy', w0
                ]);
            }
        }
    }
}

