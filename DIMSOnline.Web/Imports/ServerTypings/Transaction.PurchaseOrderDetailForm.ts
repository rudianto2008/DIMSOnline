namespace DIMSOnline.Transaction {
    export interface PurchaseOrderDetailForm {
        PurchaseOrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        Quantity: Serenity.IntegerEditor;
        ProductPriceId: Serenity.IntegerEditor;
        ProductPriceNumber: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        GrossAmount: Serenity.DecimalEditor;
        Ppn: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        ReceiveOrderDetailId: Serenity.IntegerEditor;
        ReceiveQty: Serenity.IntegerEditor;
        BackOrderQty: Serenity.IntegerEditor;
        CancellationDate: Serenity.DateEditor;
        CancellationBy: Serenity.IntegerEditor;
        DiscountRequest: Serenity.DecimalEditor;
        SupportingDocumentDiscount: Serenity.StringEditor;
        ApprovalStatusDiscount: Serenity.StringEditor;
        CommentDiscount: Serenity.StringEditor;
    }

    export class PurchaseOrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.PurchaseOrderDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderDetailForm.init)  {
                PurchaseOrderDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(PurchaseOrderDetailForm, [
                    'PurchaseOrderId', w0,
                    'ProductId', w0,
                    'Quantity', w0,
                    'ProductPriceId', w0,
                    'ProductPriceNumber', w1,
                    'Price', w2,
                    'GrossAmount', w2,
                    'Ppn', w2,
                    'Total', w2,
                    'InsertUserId', w0,
                    'InsertDate', w3,
                    'UpdateUserId', w0,
                    'UpdateDate', w3,
                    'IsActive', w0,
                    'ReceiveOrderDetailId', w0,
                    'ReceiveQty', w0,
                    'BackOrderQty', w0,
                    'CancellationDate', w3,
                    'CancellationBy', w0,
                    'DiscountRequest', w2,
                    'SupportingDocumentDiscount', w1,
                    'ApprovalStatusDiscount', w1,
                    'CommentDiscount', w1
                ]);
            }
        }
    }
}

