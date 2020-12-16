namespace DIMSOnline.Configuration {
    export interface MovementTypeForm {
        MovementTypeName: Serenity.StringEditor;
        StatusInOut: Serenity.StringEditor;
    }

    export class MovementTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Configuration.MovementType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MovementTypeForm.init)  {
                MovementTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MovementTypeForm, [
                    'MovementTypeName', w0,
                    'StatusInOut', w0
                ]);
            }
        }
    }
}

