namespace DIMSOnline.Transaction {
    export namespace ServiceUnitTypePriceService {
        export const baseUrl = 'Transaction/ServiceUnitTypePrice';

        export declare function Create(request: Serenity.SaveRequest<ServiceUnitTypePriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ServiceUnitTypePriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiceUnitTypePriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiceUnitTypePriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/ServiceUnitTypePrice/Create",
            Update = "Transaction/ServiceUnitTypePrice/Update",
            Delete = "Transaction/ServiceUnitTypePrice/Delete",
            Retrieve = "Transaction/ServiceUnitTypePrice/Retrieve",
            List = "Transaction/ServiceUnitTypePrice/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ServiceUnitTypePriceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

