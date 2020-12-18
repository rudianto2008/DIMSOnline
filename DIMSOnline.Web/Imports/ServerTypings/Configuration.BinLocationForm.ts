namespace DIMSOnline.Configuration {
    export interface BinLocationForm {
        BinLocation: Serenity.StringEditor;
    }

    export class BinLocationForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.BinLocation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BinLocationForm.init)  {
                BinLocationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BinLocationForm, [
                    'BinLocation', w0
                ]);
            }
        }
    }
}

