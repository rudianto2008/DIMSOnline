namespace DIMSOnline.Configuration {
    export interface CategoryUnitForm {
        CategoryUnitName: Serenity.StringEditor;
        PricePerHour: Serenity.DecimalEditor;
    }

    export class CategoryUnitForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.CategoryUnit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryUnitForm.init)  {
                CategoryUnitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(CategoryUnitForm, [
                    'CategoryUnitName', w0,
                    'PricePerHour', w1
                ]);
            }
        }
    }
}

