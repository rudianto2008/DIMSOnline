namespace DIMSOnline.Transaction {
    export namespace ServiceUnitTypeDetailService {
        export const baseUrl = 'Transaction/ServiceUnitTypeDetail';

        export declare function Create(request: Serenity.SaveRequest<ServiceUnitTypeDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ServiceUnitTypeDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiceUnitTypeDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiceUnitTypeDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/ServiceUnitTypeDetail/Create",
            Update = "Transaction/ServiceUnitTypeDetail/Update",
            Delete = "Transaction/ServiceUnitTypeDetail/Delete",
            Retrieve = "Transaction/ServiceUnitTypeDetail/Retrieve",
            List = "Transaction/ServiceUnitTypeDetail/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ServiceUnitTypeDetailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

