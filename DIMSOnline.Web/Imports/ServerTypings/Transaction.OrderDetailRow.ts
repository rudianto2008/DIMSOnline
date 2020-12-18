namespace DIMSOnline.Transaction {
    export interface OrderDetailRow {
        OrderDetailId?: number;
        OrderId?: number;
        ProductId?: number;
        OrderQty?: number;
        Stock?: number;
        ProductBasePriceId?: number;
        ProductBasePriceNumber?: string;
        OrderCategoryId?: number;
        BasePrice?: number;
        ActualPrice?: number;
        GrossAmount?: number;
        DiscountPercent?: number;
        Discount?: number;
        Total?: number;
        Ppn?: number;
        KmInUse?: number;
        ServiceQuantity?: number;
        SerialNumber?: string;
        ManufactureYear?: string;
        WarrantyNumber?: string;
        ServiceUnitId?: number;
        AsAlternativeItem?: boolean;
        ParentItemId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        CancellationDate?: string;
        CancellationBy?: number;
        OrderOrderNumber?: string;
        OrderOrderDate?: string;
        OrderCustomerId?: number;
        OrderUserId?: number;
        OrderProductTypeId?: number;
        OrderKmInUse?: number;
        OrderPaymentService?: number;
        OrderOrderStatus?: string;
        OrderInsertUserId?: number;
        OrderInsertDate?: string;
        OrderUpdateUserId?: number;
        OrderUpdateDate?: string;
        OrderIsActive?: number;
        OrderCompanyId?: number;
        ProductProductNumber?: string;
        ProductModelName?: string;
        ProductCategoryUnitId?: number;
        ProductUnitStockId?: number;
        ProductPartNumber?: string;
        ProductProductTypeId?: number;
        ProductMinimumStock?: number;
        ProductContinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocationId?: number;
        ProductInsertUserId?: number;
        ProductInsertDate?: string;
        ProductUpdateUserId?: number;
        ProductUpdateDate?: string;
        ProductIsActive?: number;
        ProductStockQuantity?: number;
    }

    export namespace OrderDetailRow {
        export const idProperty = 'OrderDetailId';
        export const nameProperty = 'ProductBasePriceNumber';
        export const localTextPrefix = 'Transaction.OrderDetail';
        export const deletePermission = 'Administration:Transaction';
        export const insertPermission = 'Administration:Transaction';
        export const readPermission = 'Administration:Transaction';
        export const updatePermission = 'Administration:Transaction';

        export declare const enum Fields {
            OrderDetailId = "OrderDetailId",
            OrderId = "OrderId",
            ProductId = "ProductId",
            OrderQty = "OrderQty",
            Stock = "Stock",
            ProductBasePriceId = "ProductBasePriceId",
            ProductBasePriceNumber = "ProductBasePriceNumber",
            OrderCategoryId = "OrderCategoryId",
            BasePrice = "BasePrice",
            ActualPrice = "ActualPrice",
            GrossAmount = "GrossAmount",
            DiscountPercent = "DiscountPercent",
            Discount = "Discount",
            Total = "Total",
            Ppn = "Ppn",
            KmInUse = "KmInUse",
            ServiceQuantity = "ServiceQuantity",
            SerialNumber = "SerialNumber",
            ManufactureYear = "ManufactureYear",
            WarrantyNumber = "WarrantyNumber",
            ServiceUnitId = "ServiceUnitId",
            AsAlternativeItem = "AsAlternativeItem",
            ParentItemId = "ParentItemId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            CancellationDate = "CancellationDate",
            CancellationBy = "CancellationBy",
            OrderOrderNumber = "OrderOrderNumber",
            OrderOrderDate = "OrderOrderDate",
            OrderCustomerId = "OrderCustomerId",
            OrderUserId = "OrderUserId",
            OrderProductTypeId = "OrderProductTypeId",
            OrderKmInUse = "OrderKmInUse",
            OrderPaymentService = "OrderPaymentService",
            OrderOrderStatus = "OrderOrderStatus",
            OrderInsertUserId = "OrderInsertUserId",
            OrderInsertDate = "OrderInsertDate",
            OrderUpdateUserId = "OrderUpdateUserId",
            OrderUpdateDate = "OrderUpdateDate",
            OrderIsActive = "OrderIsActive",
            OrderCompanyId = "OrderCompanyId",
            ProductProductNumber = "ProductProductNumber",
            ProductModelName = "ProductModelName",
            ProductCategoryUnitId = "ProductCategoryUnitId",
            ProductUnitStockId = "ProductUnitStockId",
            ProductPartNumber = "ProductPartNumber",
            ProductProductTypeId = "ProductProductTypeId",
            ProductMinimumStock = "ProductMinimumStock",
            ProductContinued = "ProductContinued",
            ProductProductImage = "ProductProductImage",
            ProductDescription = "ProductDescription",
            ProductBinLocationId = "ProductBinLocationId",
            ProductInsertUserId = "ProductInsertUserId",
            ProductInsertDate = "ProductInsertDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductIsActive = "ProductIsActive",
            ProductStockQuantity = "ProductStockQuantity"
        }
    }
}

