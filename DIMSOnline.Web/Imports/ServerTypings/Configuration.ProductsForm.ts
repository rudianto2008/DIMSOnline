namespace DIMSOnline.Configuration {
    export interface ProductsForm {
        ProductNumber: Serenity.StringEditor;
        ModelName: Serenity.StringEditor;
        CategoryUnitId: Serenity.IntegerEditor;
        UnitStockId: Serenity.IntegerEditor;
        PartNumber: Serenity.StringEditor;
        ProductTypeId: Serenity.IntegerEditor;
        MinimumStock: Serenity.IntegerEditor;
        Continued: Serenity.BooleanEditor;
        ProductImage: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        BinLocationId: Serenity.IntegerEditor;
        StockQuantity: Serenity.IntegerEditor;
    }

    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.Products';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsForm.init)  {
                ProductsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(ProductsForm, [
                    'ProductNumber', w0,
                    'ModelName', w0,
                    'CategoryUnitId', w1,
                    'UnitStockId', w1,
                    'PartNumber', w0,
                    'ProductTypeId', w1,
                    'MinimumStock', w1,
                    'Continued', w2,
                    'ProductImage', w0,
                    'Description', w0,
                    'BinLocationId', w1,
                    'StockQuantity', w1
                ]);
            }
        }
    }
}

