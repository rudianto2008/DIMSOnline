namespace DIMSOnline.Transaction {
    export interface InventoryForm {
        ProductId: Serenity.IntegerEditor;
        OrderCategoryId: Serenity.IntegerEditor;
        Qty: Serenity.IntegerEditor;
        InventoryStatus: Serenity.StringEditor;
        DocumentNo: Serenity.StringEditor;
        Stock: Serenity.IntegerEditor;
        ProductPrice: Serenity.DecimalEditor;
        ProductPriceNumber: Serenity.StringEditor;
        ProductBasePrice: Serenity.DecimalEditor;
        ProductBasePriceNumber: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        CompanyId: Serenity.IntegerEditor;
    }

    export class InventoryForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.Inventory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InventoryForm.init)  {
                InventoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(InventoryForm, [
                    'ProductId', w0,
                    'OrderCategoryId', w0,
                    'Qty', w0,
                    'InventoryStatus', w1,
                    'DocumentNo', w1,
                    'Stock', w0,
                    'ProductPrice', w2,
                    'ProductPriceNumber', w1,
                    'ProductBasePrice', w2,
                    'ProductBasePriceNumber', w1,
                    'InsertUserId', w0,
                    'InsertDate', w3,
                    'UpdateUserId', w0,
                    'UpdateDate', w3,
                    'IsActive', w0,
                    'CompanyId', w0
                ]);
            }
        }
    }
}

