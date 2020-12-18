namespace DIMSOnline.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Configuration {

            namespace BinLocation {
                export const BinLocation: string;
                export const BinLocationId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace CategoryUnit {
                export const CategoryUnitId: string;
                export const CategoryUnitName: string;
                export const PricePerHour: string;
            }

            namespace City {
                export const CityCode: string;
                export const CityId: string;
                export const CityName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IslandId: string;
                export const IslandIslandName: string;
                export const ProvinceId: string;
                export const ProvinceInsertDate: string;
                export const ProvinceInsertUserId: string;
                export const ProvinceIsActive: string;
                export const ProvinceIslandId: string;
                export const ProvinceProvinceCode: string;
                export const ProvinceProvinceName: string;
                export const ProvinceUpdateDate: string;
                export const ProvinceUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Company {
                export const Address: string;
                export const CityCityCode: string;
                export const CityCityName: string;
                export const CityId: string;
                export const CityInsertDate: string;
                export const CityInsertUserId: string;
                export const CityIsActive: string;
                export const CityIslandId: string;
                export const CityProvinceId: string;
                export const CityUpdateDate: string;
                export const CityUpdateUserId: string;
                export const CompanyId: string;
                export const CompanyName: string;
                export const ContactPerson: string;
                export const DeleteDate: string;
                export const DeleteUserId: string;
                export const Fax: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IslandId: string;
                export const IslandInsertDate: string;
                export const IslandInsertUserId: string;
                export const IslandIsActive: string;
                export const IslandIslandCode: string;
                export const IslandIslandName: string;
                export const IslandUpdateDate: string;
                export const IslandUpdateUserId: string;
                export const Logo: string;
                export const OfficeType: string;
                export const Phone: string;
                export const ProvinceId: string;
                export const ProvinceInsertDate: string;
                export const ProvinceInsertUserId: string;
                export const ProvinceIsActive: string;
                export const ProvinceIslandId: string;
                export const ProvinceProvinceCode: string;
                export const ProvinceProvinceName: string;
                export const ProvinceUpdateDate: string;
                export const ProvinceUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Customer {
                export const Address: string;
                export const BirthDate: string;
                export const BirthPlace: string;
                export const CityCityCode: string;
                export const CityCityName: string;
                export const CityId: string;
                export const CityInsertDate: string;
                export const CityInsertUserId: string;
                export const CityIsActive: string;
                export const CityIslandId: string;
                export const CityProvinceId: string;
                export const CityUpdateDate: string;
                export const CityUpdateUserId: string;
                export const CompanyAddress: string;
                export const CompanyCityId: string;
                export const CompanyCompanyName: string;
                export const CompanyContactPerson: string;
                export const CompanyDeleteDate: string;
                export const CompanyDeleteUserId: string;
                export const CompanyFax: string;
                export const CompanyId: string;
                export const CompanyInsertDate: string;
                export const CompanyInsertUserId: string;
                export const CompanyIsActive: string;
                export const CompanyIslandId: string;
                export const CompanyLogo: string;
                export const CompanyOfficeType: string;
                export const CompanyPhone: string;
                export const CompanyProvinceId: string;
                export const CompanyUpdateDate: string;
                export const CompanyUpdateUserId: string;
                export const ContactPerson: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerNumber: string;
                export const DeleteDate: string;
                export const DeleteUserId: string;
                export const Email: string;
                export const Fax: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IslandId: string;
                export const IslandInsertDate: string;
                export const IslandInsertUserId: string;
                export const IslandIsActive: string;
                export const IslandIslandCode: string;
                export const IslandIslandName: string;
                export const IslandUpdateDate: string;
                export const IslandUpdateUserId: string;
                export const Npwp: string;
                export const Phone: string;
                export const Pic: string;
                export const PostCode: string;
                export const ProvinceId: string;
                export const ProvinceInsertDate: string;
                export const ProvinceInsertUserId: string;
                export const ProvinceIsActive: string;
                export const ProvinceIslandId: string;
                export const ProvinceProvinceCode: string;
                export const ProvinceProvinceName: string;
                export const ProvinceUpdateDate: string;
                export const ProvinceUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Island {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IslandCode: string;
                export const IslandId: string;
                export const IslandName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace MovementType {
                export const MovementTypeId: string;
                export const MovementTypeName: string;
                export const StatusInOut: string;
            }

            namespace OrderCategory {
                export const Description: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const OrderCategoryId: string;
                export const OrderCategoryName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ProductAlternative {
                export const Combine: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const ProductAlternativeId: string;
                export const ProductBinLocationId: string;
                export const ProductCategoryUnitId: string;
                export const ProductContinued: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductIdAlt: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductMinimumStock: string;
                export const ProductModelName: string;
                export const ProductPartNumber: string;
                export const ProductProductImage: string;
                export const ProductProductNumber: string;
                export const ProductProductTypeId: string;
                export const ProductStockQuantity: string;
                export const ProductUnitStockId: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const SeqNo: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ProductBasePrice {
                export const ActualPrice: string;
                export const Continued: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Price: string;
                export const ProductBasePriceId: string;
                export const ProductBasePriceNumber: string;
                export const ProductBinLocationId: string;
                export const ProductCategoryUnitId: string;
                export const ProductContinued: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductMinimumStock: string;
                export const ProductModelName: string;
                export const ProductPartNumber: string;
                export const ProductProductImage: string;
                export const ProductProductNumber: string;
                export const ProductProductTypeId: string;
                export const ProductStockQuantity: string;
                export const ProductUnitStockId: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ProductPrice {
                export const Continued: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const OrderCategoryDescription: string;
                export const OrderCategoryId: string;
                export const OrderCategoryInsertDate: string;
                export const OrderCategoryInsertUserId: string;
                export const OrderCategoryIsActive: string;
                export const OrderCategoryOrderCategoryName: string;
                export const OrderCategoryUpdateDate: string;
                export const OrderCategoryUpdateUserId: string;
                export const Price: string;
                export const ProductBinLocationId: string;
                export const ProductCategoryUnitId: string;
                export const ProductContinued: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductMinimumStock: string;
                export const ProductModelName: string;
                export const ProductPartNumber: string;
                export const ProductPriceId: string;
                export const ProductPriceNumber: string;
                export const ProductProductImage: string;
                export const ProductProductNumber: string;
                export const ProductProductTypeId: string;
                export const ProductStockQuantity: string;
                export const ProductUnitStockId: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ProductType {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const ProductTypeId: string;
                export const ProductTypeName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Products {
                export const BinLocation: string;
                export const BinLocationId: string;
                export const BinLocationInsertDate: string;
                export const BinLocationInsertUserId: string;
                export const BinLocationIsActive: string;
                export const BinLocationUpdateDate: string;
                export const BinLocationUpdateUserId: string;
                export const CategoryUnitCategoryUnitName: string;
                export const CategoryUnitId: string;
                export const CategoryUnitPricePerHour: string;
                export const Continued: string;
                export const Description: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const MinimumStock: string;
                export const ModelName: string;
                export const PartNumber: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductNumber: string;
                export const ProductTypeId: string;
                export const ProductTypeInsertDate: string;
                export const ProductTypeInsertUserId: string;
                export const ProductTypeIsActive: string;
                export const ProductTypeProductTypeName: string;
                export const ProductTypeUpdateDate: string;
                export const ProductTypeUpdateUserId: string;
                export const StockQuantity: string;
                export const UnitStock: string;
                export const UnitStockId: string;
                export const UnitStockInsertDate: string;
                export const UnitStockInsertUserId: string;
                export const UnitStockIsActive: string;
                export const UnitStockUpdateDate: string;
                export const UnitStockUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ProductsLog {
                export const BinLocation: string;
                export const ChangingUserId: string;
                export const Continued: string;
                export const Description: string;
                export const ModelName: string;
                export const OperationType: string;
                export const PartNumber: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductLogId: string;
                export const ProductTypeId: string;
                export const UnitStock: string;
                export const ValidFrom: string;
                export const ValidUntil: string;
            }

            namespace Province {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IslandId: string;
                export const IslandInsertDate: string;
                export const IslandInsertUserId: string;
                export const IslandIsActive: string;
                export const IslandIslandCode: string;
                export const IslandIslandName: string;
                export const IslandUpdateDate: string;
                export const IslandUpdateUserId: string;
                export const ProvinceCode: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Supplier {
                export const Address: string;
                export const ContactName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Phone: string;
                export const SupplierId: string;
                export const SupplierName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace UnitStock {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const UnitStock: string;
                export const UnitStockId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Transaction {

            namespace Inventory {
                export const CompanyId: string;
                export const DocumentNo: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InventoryId: string;
                export const InventoryStatus: string;
                export const IsActive: string;
                export const OrderCategoryId: string;
                export const ProductBasePrice: string;
                export const ProductBasePriceNumber: string;
                export const ProductBinLocationId: string;
                export const ProductCategoryUnitId: string;
                export const ProductContinued: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductMinimumStock: string;
                export const ProductModelName: string;
                export const ProductPartNumber: string;
                export const ProductPrice: string;
                export const ProductPriceNumber: string;
                export const ProductProductImage: string;
                export const ProductProductNumber: string;
                export const ProductProductTypeId: string;
                export const ProductStockQuantity: string;
                export const ProductUnitStockId: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const Qty: string;
                export const Stock: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace MovementStock {
                export const Description: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const MovementQty: string;
                export const MovementStockId: string;
                export const MovementStockNumber: string;
                export const MovementTypeId: string;
                export const MovementTypeMovementTypeName: string;
                export const MovementTypeStatusInOut: string;
                export const ProductBinLocationId: string;
                export const ProductCategoryUnitId: string;
                export const ProductContinued: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductMinimumStock: string;
                export const ProductModelName: string;
                export const ProductPartNumber: string;
                export const ProductProductImage: string;
                export const ProductProductNumber: string;
                export const ProductProductTypeId: string;
                export const ProductStockQuantity: string;
                export const ProductUnitStockId: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace OrderDetail {
                export const ActualPrice: string;
                export const AsAlternativeItem: string;
                export const BasePrice: string;
                export const CancellationBy: string;
                export const CancellationDate: string;
                export const Discount: string;
                export const DiscountPercent: string;
                export const GrossAmount: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const KmInUse: string;
                export const ManufactureYear: string;
                export const OrderCategoryId: string;
                export const OrderCompanyId: string;
                export const OrderCustomerId: string;
                export const OrderDetailId: string;
                export const OrderId: string;
                export const OrderInsertDate: string;
                export const OrderInsertUserId: string;
                export const OrderIsActive: string;
                export const OrderKmInUse: string;
                export const OrderOrderDate: string;
                export const OrderOrderNumber: string;
                export const OrderOrderStatus: string;
                export const OrderPaymentService: string;
                export const OrderProductTypeId: string;
                export const OrderQty: string;
                export const OrderUpdateDate: string;
                export const OrderUpdateUserId: string;
                export const OrderUserId: string;
                export const ParentItemId: string;
                export const Ppn: string;
                export const ProductBasePriceId: string;
                export const ProductBasePriceNumber: string;
                export const ProductBinLocationId: string;
                export const ProductCategoryUnitId: string;
                export const ProductContinued: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductMinimumStock: string;
                export const ProductModelName: string;
                export const ProductPartNumber: string;
                export const ProductProductImage: string;
                export const ProductProductNumber: string;
                export const ProductProductTypeId: string;
                export const ProductStockQuantity: string;
                export const ProductUnitStockId: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const SerialNumber: string;
                export const ServiceQuantity: string;
                export const ServiceUnitId: string;
                export const Stock: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const WarrantyNumber: string;
            }

            namespace Orders {
                export const CompanyAddress: string;
                export const CompanyCityId: string;
                export const CompanyCompanyName: string;
                export const CompanyContactPerson: string;
                export const CompanyDeleteDate: string;
                export const CompanyDeleteUserId: string;
                export const CompanyFax: string;
                export const CompanyId: string;
                export const CompanyInsertDate: string;
                export const CompanyInsertUserId: string;
                export const CompanyIsActive: string;
                export const CompanyIslandId: string;
                export const CompanyLogo: string;
                export const CompanyOfficeType: string;
                export const CompanyPhone: string;
                export const CompanyProvinceId: string;
                export const CompanyUpdateDate: string;
                export const CompanyUpdateUserId: string;
                export const CustomerAddress: string;
                export const CustomerBirthDate: string;
                export const CustomerBirthPlace: string;
                export const CustomerCityId: string;
                export const CustomerCompanyId: string;
                export const CustomerContactPerson: string;
                export const CustomerCustomerName: string;
                export const CustomerCustomerNumber: string;
                export const CustomerDeleteDate: string;
                export const CustomerDeleteUserId: string;
                export const CustomerEmail: string;
                export const CustomerFax: string;
                export const CustomerId: string;
                export const CustomerInsertDate: string;
                export const CustomerInsertUserId: string;
                export const CustomerIsActive: string;
                export const CustomerIslandId: string;
                export const CustomerNpwp: string;
                export const CustomerPhone: string;
                export const CustomerPic: string;
                export const CustomerPostCode: string;
                export const CustomerProvinceId: string;
                export const CustomerUpdateDate: string;
                export const CustomerUpdateUserId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const KmInUse: string;
                export const OrderDate: string;
                export const OrderId: string;
                export const OrderNumber: string;
                export const OrderStatus: string;
                export const PaymentService: string;
                export const ProductTypeId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
            }

            namespace PurchaseOrder {
                export const CompanyAddress: string;
                export const CompanyCityId: string;
                export const CompanyCompanyName: string;
                export const CompanyContactPerson: string;
                export const CompanyDeleteDate: string;
                export const CompanyDeleteUserId: string;
                export const CompanyFax: string;
                export const CompanyId: string;
                export const CompanyInsertDate: string;
                export const CompanyInsertUserId: string;
                export const CompanyIsActive: string;
                export const CompanyIslandId: string;
                export const CompanyLogo: string;
                export const CompanyOfficeType: string;
                export const CompanyPhone: string;
                export const CompanyProvinceId: string;
                export const CompanyUpdateDate: string;
                export const CompanyUpdateUserId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const OrderCategoryId: string;
                export const PickupPoint: string;
                export const ProductTypeId: string;
                export const ProductTypeInsertDate: string;
                export const ProductTypeInsertUserId: string;
                export const ProductTypeIsActive: string;
                export const ProductTypeProductTypeName: string;
                export const ProductTypeUpdateDate: string;
                export const ProductTypeUpdateUserId: string;
                export const PurchaseOrderDate: string;
                export const PurchaseOrderId: string;
                export const PurchaseOrderNumber: string;
                export const PurchaseOrderStatus: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PurchaseOrderDetail {
                export const ApprovalStatusDiscount: string;
                export const BackOrderQty: string;
                export const CancellationBy: string;
                export const CancellationDate: string;
                export const CommentDiscount: string;
                export const DiscountRequest: string;
                export const GrossAmount: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Ppn: string;
                export const Price: string;
                export const ProductBinLocationId: string;
                export const ProductCategoryUnitId: string;
                export const ProductContinued: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductMinimumStock: string;
                export const ProductModelName: string;
                export const ProductPartNumber: string;
                export const ProductPriceContinued: string;
                export const ProductPriceId: string;
                export const ProductPriceInsertDate: string;
                export const ProductPriceInsertUserId: string;
                export const ProductPriceIsActive: string;
                export const ProductPriceNumber: string;
                export const ProductPriceOrderCategoryId: string;
                export const ProductPricePrice: string;
                export const ProductPriceProductId: string;
                export const ProductPriceProductPriceNumber: string;
                export const ProductPriceUpdateDate: string;
                export const ProductPriceUpdateUserId: string;
                export const ProductProductImage: string;
                export const ProductProductNumber: string;
                export const ProductProductTypeId: string;
                export const ProductStockQuantity: string;
                export const ProductUnitStockId: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const PurchaseOrderCompanyId: string;
                export const PurchaseOrderDetailId: string;
                export const PurchaseOrderId: string;
                export const PurchaseOrderInsertDate: string;
                export const PurchaseOrderInsertUserId: string;
                export const PurchaseOrderIsActive: string;
                export const PurchaseOrderOrderCategoryId: string;
                export const PurchaseOrderPickupPoint: string;
                export const PurchaseOrderProductTypeId: string;
                export const PurchaseOrderPurchaseOrderDate: string;
                export const PurchaseOrderPurchaseOrderNumber: string;
                export const PurchaseOrderPurchaseOrderStatus: string;
                export const PurchaseOrderUpdateDate: string;
                export const PurchaseOrderUpdateUserId: string;
                export const Quantity: string;
                export const ReceiveOrderDetailId: string;
                export const ReceiveQty: string;
                export const SupportingDocumentDiscount: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ReceiveOrder {
                export const AcknowledgeBy: string;
                export const CompanyAddress: string;
                export const CompanyCityId: string;
                export const CompanyCompanyName: string;
                export const CompanyContactPerson: string;
                export const CompanyDeleteDate: string;
                export const CompanyDeleteUserId: string;
                export const CompanyFax: string;
                export const CompanyId: string;
                export const CompanyInsertDate: string;
                export const CompanyInsertUserId: string;
                export const CompanyIsActive: string;
                export const CompanyIslandId: string;
                export const CompanyLogo: string;
                export const CompanyOfficeType: string;
                export const CompanyPhone: string;
                export const CompanyProvinceId: string;
                export const CompanyUpdateDate: string;
                export const CompanyUpdateUserId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const ProductTypeId: string;
                export const PurchaseOrderCompanyId: string;
                export const PurchaseOrderId: string;
                export const PurchaseOrderInsertDate: string;
                export const PurchaseOrderInsertUserId: string;
                export const PurchaseOrderIsActive: string;
                export const PurchaseOrderOrderCategoryId: string;
                export const PurchaseOrderPickupPoint: string;
                export const PurchaseOrderProductTypeId: string;
                export const PurchaseOrderPurchaseOrderDate: string;
                export const PurchaseOrderPurchaseOrderNumber: string;
                export const PurchaseOrderPurchaseOrderStatus: string;
                export const PurchaseOrderUpdateDate: string;
                export const PurchaseOrderUpdateUserId: string;
                export const ReceiveBy: string;
                export const ReceiveDate: string;
                export const ReceiveOrderId: string;
                export const ReceiveOrderNumber: string;
                export const ReceiveOrderStatus: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ReceiveOrderDetail {
                export const BackOrderQty: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const PoQty: string;
                export const Price: string;
                export const ProductBinLocationId: string;
                export const ProductCategoryUnitId: string;
                export const ProductContinued: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductMinimumStock: string;
                export const ProductModelName: string;
                export const ProductPartNumber: string;
                export const ProductProductImage: string;
                export const ProductProductNumber: string;
                export const ProductProductTypeId: string;
                export const ProductStockQuantity: string;
                export const ProductUnitStockId: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const ReceiveComplete: string;
                export const ReceiveOrderAcknowledgeBy: string;
                export const ReceiveOrderCompanyId: string;
                export const ReceiveOrderDetailId: string;
                export const ReceiveOrderId: string;
                export const ReceiveOrderInsertDate: string;
                export const ReceiveOrderInsertUserId: string;
                export const ReceiveOrderIsActive: string;
                export const ReceiveOrderProductTypeId: string;
                export const ReceiveOrderPurchaseOrderId: string;
                export const ReceiveOrderReceiveBy: string;
                export const ReceiveOrderReceiveDate: string;
                export const ReceiveOrderReceiveOrderNumber: string;
                export const ReceiveOrderReceiveOrderStatus: string;
                export const ReceiveOrderUpdateDate: string;
                export const ReceiveOrderUpdateUserId: string;
                export const ReceiveQty: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace SerialNumberUnit {
                export const Available: string;
                export const CategoryUnitId: string;
                export const ManufactureYear: string;
                export const ReceiveOrderAcknowledgeBy: string;
                export const ReceiveOrderCompanyId: string;
                export const ReceiveOrderId: string;
                export const ReceiveOrderInsertDate: string;
                export const ReceiveOrderInsertUserId: string;
                export const ReceiveOrderIsActive: string;
                export const ReceiveOrderProductTypeId: string;
                export const ReceiveOrderPurchaseOrderId: string;
                export const ReceiveOrderReceiveBy: string;
                export const ReceiveOrderReceiveDate: string;
                export const ReceiveOrderReceiveOrderNumber: string;
                export const ReceiveOrderReceiveOrderStatus: string;
                export const ReceiveOrderUpdateDate: string;
                export const ReceiveOrderUpdateUserId: string;
                export const SerialNumber: string;
                export const SerialNumberUnitId: string;
                export const WarrantyNumber: string;
            }

            namespace ServiceUnit {
                export const CustomerAddress: string;
                export const CustomerBirthDate: string;
                export const CustomerBirthPlace: string;
                export const CustomerCityId: string;
                export const CustomerCompanyId: string;
                export const CustomerContactPerson: string;
                export const CustomerCustomerName: string;
                export const CustomerCustomerNumber: string;
                export const CustomerDeleteDate: string;
                export const CustomerDeleteUserId: string;
                export const CustomerEmail: string;
                export const CustomerFax: string;
                export const CustomerId: string;
                export const CustomerInsertDate: string;
                export const CustomerInsertUserId: string;
                export const CustomerIsActive: string;
                export const CustomerIslandId: string;
                export const CustomerNpwp: string;
                export const CustomerPhone: string;
                export const CustomerPic: string;
                export const CustomerPostCode: string;
                export const CustomerProvinceId: string;
                export const CustomerUpdateDate: string;
                export const CustomerUpdateUserId: string;
                export const Hm: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const ManufactureYear: string;
                export const OrderUnitCompanyId: string;
                export const OrderUnitCustomerId: string;
                export const OrderUnitId: string;
                export const OrderUnitInsertDate: string;
                export const OrderUnitInsertUserId: string;
                export const OrderUnitIsActive: string;
                export const OrderUnitKmInUse: string;
                export const OrderUnitOrderDate: string;
                export const OrderUnitOrderNumber: string;
                export const OrderUnitOrderStatus: string;
                export const OrderUnitPaymentService: string;
                export const OrderUnitProductTypeId: string;
                export const OrderUnitUpdateDate: string;
                export const OrderUnitUpdateUserId: string;
                export const OrderUnitUserId: string;
                export const ProductBinLocationId: string;
                export const ProductCategoryUnitId: string;
                export const ProductContinued: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductInsertDate: string;
                export const ProductInsertUserId: string;
                export const ProductIsActive: string;
                export const ProductMinimumStock: string;
                export const ProductModelName: string;
                export const ProductPartNumber: string;
                export const ProductProductImage: string;
                export const ProductProductNumber: string;
                export const ProductProductTypeId: string;
                export const ProductStockQuantity: string;
                export const ProductUnitStockId: string;
                export const ProductUpdateDate: string;
                export const ProductUpdateUserId: string;
                export const Remark: string;
                export const SerialNumber: string;
                export const ServiceBy: string;
                export const ServiceDate: string;
                export const ServiceUnitId: string;
                export const ServiceUnitNumber: string;
                export const ServiceUnitStatus: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const WarrantyNumber: string;
            }

            namespace ServiceUnitDetail {
                export const ChargePerHour: string;
                export const KmInUse: string;
                export const OrderIdService: string;
                export const ServiceBy: string;
                export const ServiceCharge: string;
                export const ServiceDate: string;
                export const ServiceHour: string;
                export const ServiceUnitCustomerId: string;
                export const ServiceUnitDetailId: string;
                export const ServiceUnitHm: string;
                export const ServiceUnitId: string;
                export const ServiceUnitInsertDate: string;
                export const ServiceUnitInsertUserId: string;
                export const ServiceUnitIsActive: string;
                export const ServiceUnitManufactureYear: string;
                export const ServiceUnitOrderUnitId: string;
                export const ServiceUnitProductId: string;
                export const ServiceUnitRemark: string;
                export const ServiceUnitSerialNumber: string;
                export const ServiceUnitServiceBy: string;
                export const ServiceUnitServiceDate: string;
                export const ServiceUnitServiceUnitNumber: string;
                export const ServiceUnitServiceUnitStatus: string;
                export const ServiceUnitType: string;
                export const ServiceUnitTypeCategoryUnitId: string;
                export const ServiceUnitTypeChargePerHour: string;
                export const ServiceUnitTypeContinued: string;
                export const ServiceUnitTypeDescription: string;
                export const ServiceUnitTypeId: string;
                export const ServiceUnitTypeJobCodeNo: string;
                export const ServiceUnitTypeProductId: string;
                export const ServiceUnitTypeStandartOpTime: string;
                export const ServiceUnitUpdateDate: string;
                export const ServiceUnitUpdateUserId: string;
                export const ServiceUnitWarrantyNumber: string;
            }

            namespace ServiceUnitType {
                export const CategoryUnitCategoryUnitName: string;
                export const CategoryUnitId: string;
                export const CategoryUnitPricePerHour: string;
                export const ChargePerHour: string;
                export const Continued: string;
                export const Description: string;
                export const JobCodeNo: string;
                export const ProductId: string;
                export const ServiceUnitType: string;
                export const ServiceUnitTypeId: string;
                export const StandartOpTime: string;
            }

            namespace ServiceUnitTypeDetail {
                export const CategoryUnitId: string;
                export const ChargePerHour: string;
                export const Description: string;
                export const JobCodeNo: string;
                export const ServiceHour: string;
                export const ServiceUnitId: string;
                export const ServiceUnitType: string;
                export const ServiceUnitTypeCategoryUnitId: string;
                export const ServiceUnitTypeChargePerHour: string;
                export const ServiceUnitTypeContinued: string;
                export const ServiceUnitTypeDescription: string;
                export const ServiceUnitTypeDetailId: string;
                export const ServiceUnitTypeId: string;
                export const ServiceUnitTypeJobCodeNo: string;
                export const ServiceUnitTypeProductId: string;
                export const ServiceUnitTypeStandartOpTime: string;
                export const StandartOpTime: string;
                export const TotalCharge: string;
            }

            namespace ServiceUnitTypePrice {
                export const CategoryUnitCategoryUnitName: string;
                export const CategoryUnitId: string;
                export const CategoryUnitPricePerHour: string;
                export const PricePerHour: string;
                export const ServiceUnitTypePriceId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    DIMSOnline['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Configuration:{BinLocation:{BinLocation:1,BinLocationId:1,InsertDate:1,InsertUserId:1,IsActive:1,UpdateDate:1,UpdateUserId:1},CategoryUnit:{CategoryUnitId:1,CategoryUnitName:1,PricePerHour:1},City:{CityCode:1,CityId:1,CityName:1,InsertDate:1,InsertUserId:1,IsActive:1,IslandId:1,IslandIslandName:1,ProvinceId:1,ProvinceInsertDate:1,ProvinceInsertUserId:1,ProvinceIsActive:1,ProvinceIslandId:1,ProvinceProvinceCode:1,ProvinceProvinceName:1,ProvinceUpdateDate:1,ProvinceUpdateUserId:1,UpdateDate:1,UpdateUserId:1},Company:{Address:1,CityCityCode:1,CityCityName:1,CityId:1,CityInsertDate:1,CityInsertUserId:1,CityIsActive:1,CityIslandId:1,CityProvinceId:1,CityUpdateDate:1,CityUpdateUserId:1,CompanyId:1,CompanyName:1,ContactPerson:1,DeleteDate:1,DeleteUserId:1,Fax:1,InsertDate:1,InsertUserId:1,IsActive:1,IslandId:1,IslandInsertDate:1,IslandInsertUserId:1,IslandIsActive:1,IslandIslandCode:1,IslandIslandName:1,IslandUpdateDate:1,IslandUpdateUserId:1,Logo:1,OfficeType:1,Phone:1,ProvinceId:1,ProvinceInsertDate:1,ProvinceInsertUserId:1,ProvinceIsActive:1,ProvinceIslandId:1,ProvinceProvinceCode:1,ProvinceProvinceName:1,ProvinceUpdateDate:1,ProvinceUpdateUserId:1,UpdateDate:1,UpdateUserId:1},Customer:{Address:1,BirthDate:1,BirthPlace:1,CityCityCode:1,CityCityName:1,CityId:1,CityInsertDate:1,CityInsertUserId:1,CityIsActive:1,CityIslandId:1,CityProvinceId:1,CityUpdateDate:1,CityUpdateUserId:1,CompanyAddress:1,CompanyCityId:1,CompanyCompanyName:1,CompanyContactPerson:1,CompanyDeleteDate:1,CompanyDeleteUserId:1,CompanyFax:1,CompanyId:1,CompanyInsertDate:1,CompanyInsertUserId:1,CompanyIsActive:1,CompanyIslandId:1,CompanyLogo:1,CompanyOfficeType:1,CompanyPhone:1,CompanyProvinceId:1,CompanyUpdateDate:1,CompanyUpdateUserId:1,ContactPerson:1,CustomerId:1,CustomerName:1,CustomerNumber:1,DeleteDate:1,DeleteUserId:1,Email:1,Fax:1,InsertDate:1,InsertUserId:1,IsActive:1,IslandId:1,IslandInsertDate:1,IslandInsertUserId:1,IslandIsActive:1,IslandIslandCode:1,IslandIslandName:1,IslandUpdateDate:1,IslandUpdateUserId:1,Npwp:1,Phone:1,Pic:1,PostCode:1,ProvinceId:1,ProvinceInsertDate:1,ProvinceInsertUserId:1,ProvinceIsActive:1,ProvinceIslandId:1,ProvinceProvinceCode:1,ProvinceProvinceName:1,ProvinceUpdateDate:1,ProvinceUpdateUserId:1,UpdateDate:1,UpdateUserId:1},Island:{InsertDate:1,InsertUserId:1,IsActive:1,IslandCode:1,IslandId:1,IslandName:1,UpdateDate:1,UpdateUserId:1},MovementType:{MovementTypeId:1,MovementTypeName:1,StatusInOut:1},OrderCategory:{Description:1,InsertDate:1,InsertUserId:1,IsActive:1,OrderCategoryId:1,OrderCategoryName:1,UpdateDate:1,UpdateUserId:1},ProductAlternative:{Combine:1,InsertDate:1,InsertUserId:1,IsActive:1,ProductAlternativeId:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductIdAlt:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,SeqNo:1,UpdateDate:1,UpdateUserId:1},ProductBasePrice:{ActualPrice:1,Continued:1,InsertDate:1,InsertUserId:1,IsActive:1,Price:1,ProductBasePriceId:1,ProductBasePriceNumber:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,UpdateDate:1,UpdateUserId:1},ProductPrice:{Continued:1,InsertDate:1,InsertUserId:1,IsActive:1,OrderCategoryDescription:1,OrderCategoryId:1,OrderCategoryInsertDate:1,OrderCategoryInsertUserId:1,OrderCategoryIsActive:1,OrderCategoryOrderCategoryName:1,OrderCategoryUpdateDate:1,OrderCategoryUpdateUserId:1,Price:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductPriceId:1,ProductPriceNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,UpdateDate:1,UpdateUserId:1},ProductType:{InsertDate:1,InsertUserId:1,IsActive:1,ProductTypeId:1,ProductTypeName:1,UpdateDate:1,UpdateUserId:1},Products:{BinLocation:1,BinLocationId:1,BinLocationInsertDate:1,BinLocationInsertUserId:1,BinLocationIsActive:1,BinLocationUpdateDate:1,BinLocationUpdateUserId:1,CategoryUnitCategoryUnitName:1,CategoryUnitId:1,CategoryUnitPricePerHour:1,Continued:1,Description:1,InsertDate:1,InsertUserId:1,IsActive:1,MinimumStock:1,ModelName:1,PartNumber:1,ProductId:1,ProductImage:1,ProductNumber:1,ProductTypeId:1,ProductTypeInsertDate:1,ProductTypeInsertUserId:1,ProductTypeIsActive:1,ProductTypeProductTypeName:1,ProductTypeUpdateDate:1,ProductTypeUpdateUserId:1,StockQuantity:1,UnitStock:1,UnitStockId:1,UnitStockInsertDate:1,UnitStockInsertUserId:1,UnitStockIsActive:1,UnitStockUpdateDate:1,UnitStockUpdateUserId:1,UpdateDate:1,UpdateUserId:1},ProductsLog:{BinLocation:1,ChangingUserId:1,Continued:1,Description:1,ModelName:1,OperationType:1,PartNumber:1,ProductId:1,ProductImage:1,ProductLogId:1,ProductTypeId:1,UnitStock:1,ValidFrom:1,ValidUntil:1},Province:{InsertDate:1,InsertUserId:1,IsActive:1,IslandId:1,IslandInsertDate:1,IslandInsertUserId:1,IslandIsActive:1,IslandIslandCode:1,IslandIslandName:1,IslandUpdateDate:1,IslandUpdateUserId:1,ProvinceCode:1,ProvinceId:1,ProvinceName:1,UpdateDate:1,UpdateUserId:1},Supplier:{Address:1,ContactName:1,InsertDate:1,InsertUserId:1,IsActive:1,Phone:1,SupplierId:1,SupplierName:1,UpdateDate:1,UpdateUserId:1},UnitStock:{InsertDate:1,InsertUserId:1,IsActive:1,UnitStock:1,UnitStockId:1,UpdateDate:1,UpdateUserId:1}},Transaction:{Inventory:{CompanyId:1,DocumentNo:1,InsertDate:1,InsertUserId:1,InventoryId:1,InventoryStatus:1,IsActive:1,OrderCategoryId:1,ProductBasePrice:1,ProductBasePriceNumber:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductPrice:1,ProductPriceNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,Qty:1,Stock:1,UpdateDate:1,UpdateUserId:1},MovementStock:{Description:1,InsertDate:1,InsertUserId:1,IsActive:1,MovementQty:1,MovementStockId:1,MovementStockNumber:1,MovementTypeId:1,MovementTypeMovementTypeName:1,MovementTypeStatusInOut:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,UpdateDate:1,UpdateUserId:1},OrderDetail:{ActualPrice:1,AsAlternativeItem:1,BasePrice:1,CancellationBy:1,CancellationDate:1,Discount:1,DiscountPercent:1,GrossAmount:1,InsertDate:1,InsertUserId:1,IsActive:1,KmInUse:1,ManufactureYear:1,OrderCategoryId:1,OrderCompanyId:1,OrderCustomerId:1,OrderDetailId:1,OrderId:1,OrderInsertDate:1,OrderInsertUserId:1,OrderIsActive:1,OrderKmInUse:1,OrderOrderDate:1,OrderOrderNumber:1,OrderOrderStatus:1,OrderPaymentService:1,OrderProductTypeId:1,OrderQty:1,OrderUpdateDate:1,OrderUpdateUserId:1,OrderUserId:1,ParentItemId:1,Ppn:1,ProductBasePriceId:1,ProductBasePriceNumber:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,SerialNumber:1,ServiceQuantity:1,ServiceUnitId:1,Stock:1,Total:1,UpdateDate:1,UpdateUserId:1,WarrantyNumber:1},Orders:{CompanyAddress:1,CompanyCityId:1,CompanyCompanyName:1,CompanyContactPerson:1,CompanyDeleteDate:1,CompanyDeleteUserId:1,CompanyFax:1,CompanyId:1,CompanyInsertDate:1,CompanyInsertUserId:1,CompanyIsActive:1,CompanyIslandId:1,CompanyLogo:1,CompanyOfficeType:1,CompanyPhone:1,CompanyProvinceId:1,CompanyUpdateDate:1,CompanyUpdateUserId:1,CustomerAddress:1,CustomerBirthDate:1,CustomerBirthPlace:1,CustomerCityId:1,CustomerCompanyId:1,CustomerContactPerson:1,CustomerCustomerName:1,CustomerCustomerNumber:1,CustomerDeleteDate:1,CustomerDeleteUserId:1,CustomerEmail:1,CustomerFax:1,CustomerId:1,CustomerInsertDate:1,CustomerInsertUserId:1,CustomerIsActive:1,CustomerIslandId:1,CustomerNpwp:1,CustomerPhone:1,CustomerPic:1,CustomerPostCode:1,CustomerProvinceId:1,CustomerUpdateDate:1,CustomerUpdateUserId:1,InsertDate:1,InsertUserId:1,IsActive:1,KmInUse:1,OrderDate:1,OrderId:1,OrderNumber:1,OrderStatus:1,PaymentService:1,ProductTypeId:1,UpdateDate:1,UpdateUserId:1,UserId:1},PurchaseOrder:{CompanyAddress:1,CompanyCityId:1,CompanyCompanyName:1,CompanyContactPerson:1,CompanyDeleteDate:1,CompanyDeleteUserId:1,CompanyFax:1,CompanyId:1,CompanyInsertDate:1,CompanyInsertUserId:1,CompanyIsActive:1,CompanyIslandId:1,CompanyLogo:1,CompanyOfficeType:1,CompanyPhone:1,CompanyProvinceId:1,CompanyUpdateDate:1,CompanyUpdateUserId:1,InsertDate:1,InsertUserId:1,IsActive:1,OrderCategoryId:1,PickupPoint:1,ProductTypeId:1,ProductTypeInsertDate:1,ProductTypeInsertUserId:1,ProductTypeIsActive:1,ProductTypeProductTypeName:1,ProductTypeUpdateDate:1,ProductTypeUpdateUserId:1,PurchaseOrderDate:1,PurchaseOrderId:1,PurchaseOrderNumber:1,PurchaseOrderStatus:1,UpdateDate:1,UpdateUserId:1},PurchaseOrderDetail:{ApprovalStatusDiscount:1,BackOrderQty:1,CancellationBy:1,CancellationDate:1,CommentDiscount:1,DiscountRequest:1,GrossAmount:1,InsertDate:1,InsertUserId:1,IsActive:1,Ppn:1,Price:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductPriceContinued:1,ProductPriceId:1,ProductPriceInsertDate:1,ProductPriceInsertUserId:1,ProductPriceIsActive:1,ProductPriceNumber:1,ProductPriceOrderCategoryId:1,ProductPricePrice:1,ProductPriceProductId:1,ProductPriceProductPriceNumber:1,ProductPriceUpdateDate:1,ProductPriceUpdateUserId:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,PurchaseOrderCompanyId:1,PurchaseOrderDetailId:1,PurchaseOrderId:1,PurchaseOrderInsertDate:1,PurchaseOrderInsertUserId:1,PurchaseOrderIsActive:1,PurchaseOrderOrderCategoryId:1,PurchaseOrderPickupPoint:1,PurchaseOrderProductTypeId:1,PurchaseOrderPurchaseOrderDate:1,PurchaseOrderPurchaseOrderNumber:1,PurchaseOrderPurchaseOrderStatus:1,PurchaseOrderUpdateDate:1,PurchaseOrderUpdateUserId:1,Quantity:1,ReceiveOrderDetailId:1,ReceiveQty:1,SupportingDocumentDiscount:1,Total:1,UpdateDate:1,UpdateUserId:1},ReceiveOrder:{AcknowledgeBy:1,CompanyAddress:1,CompanyCityId:1,CompanyCompanyName:1,CompanyContactPerson:1,CompanyDeleteDate:1,CompanyDeleteUserId:1,CompanyFax:1,CompanyId:1,CompanyInsertDate:1,CompanyInsertUserId:1,CompanyIsActive:1,CompanyIslandId:1,CompanyLogo:1,CompanyOfficeType:1,CompanyPhone:1,CompanyProvinceId:1,CompanyUpdateDate:1,CompanyUpdateUserId:1,InsertDate:1,InsertUserId:1,IsActive:1,ProductTypeId:1,PurchaseOrderCompanyId:1,PurchaseOrderId:1,PurchaseOrderInsertDate:1,PurchaseOrderInsertUserId:1,PurchaseOrderIsActive:1,PurchaseOrderOrderCategoryId:1,PurchaseOrderPickupPoint:1,PurchaseOrderProductTypeId:1,PurchaseOrderPurchaseOrderDate:1,PurchaseOrderPurchaseOrderNumber:1,PurchaseOrderPurchaseOrderStatus:1,PurchaseOrderUpdateDate:1,PurchaseOrderUpdateUserId:1,ReceiveBy:1,ReceiveDate:1,ReceiveOrderId:1,ReceiveOrderNumber:1,ReceiveOrderStatus:1,UpdateDate:1,UpdateUserId:1},ReceiveOrderDetail:{BackOrderQty:1,InsertDate:1,InsertUserId:1,IsActive:1,PoQty:1,Price:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,ReceiveComplete:1,ReceiveOrderAcknowledgeBy:1,ReceiveOrderCompanyId:1,ReceiveOrderDetailId:1,ReceiveOrderId:1,ReceiveOrderInsertDate:1,ReceiveOrderInsertUserId:1,ReceiveOrderIsActive:1,ReceiveOrderProductTypeId:1,ReceiveOrderPurchaseOrderId:1,ReceiveOrderReceiveBy:1,ReceiveOrderReceiveDate:1,ReceiveOrderReceiveOrderNumber:1,ReceiveOrderReceiveOrderStatus:1,ReceiveOrderUpdateDate:1,ReceiveOrderUpdateUserId:1,ReceiveQty:1,UpdateDate:1,UpdateUserId:1},SerialNumberUnit:{Available:1,CategoryUnitId:1,ManufactureYear:1,ReceiveOrderAcknowledgeBy:1,ReceiveOrderCompanyId:1,ReceiveOrderId:1,ReceiveOrderInsertDate:1,ReceiveOrderInsertUserId:1,ReceiveOrderIsActive:1,ReceiveOrderProductTypeId:1,ReceiveOrderPurchaseOrderId:1,ReceiveOrderReceiveBy:1,ReceiveOrderReceiveDate:1,ReceiveOrderReceiveOrderNumber:1,ReceiveOrderReceiveOrderStatus:1,ReceiveOrderUpdateDate:1,ReceiveOrderUpdateUserId:1,SerialNumber:1,SerialNumberUnitId:1,WarrantyNumber:1},ServiceUnit:{CustomerAddress:1,CustomerBirthDate:1,CustomerBirthPlace:1,CustomerCityId:1,CustomerCompanyId:1,CustomerContactPerson:1,CustomerCustomerName:1,CustomerCustomerNumber:1,CustomerDeleteDate:1,CustomerDeleteUserId:1,CustomerEmail:1,CustomerFax:1,CustomerId:1,CustomerInsertDate:1,CustomerInsertUserId:1,CustomerIsActive:1,CustomerIslandId:1,CustomerNpwp:1,CustomerPhone:1,CustomerPic:1,CustomerPostCode:1,CustomerProvinceId:1,CustomerUpdateDate:1,CustomerUpdateUserId:1,Hm:1,InsertDate:1,InsertUserId:1,IsActive:1,ManufactureYear:1,OrderUnitCompanyId:1,OrderUnitCustomerId:1,OrderUnitId:1,OrderUnitInsertDate:1,OrderUnitInsertUserId:1,OrderUnitIsActive:1,OrderUnitKmInUse:1,OrderUnitOrderDate:1,OrderUnitOrderNumber:1,OrderUnitOrderStatus:1,OrderUnitPaymentService:1,OrderUnitProductTypeId:1,OrderUnitUpdateDate:1,OrderUnitUpdateUserId:1,OrderUnitUserId:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,Remark:1,SerialNumber:1,ServiceBy:1,ServiceDate:1,ServiceUnitId:1,ServiceUnitNumber:1,ServiceUnitStatus:1,UpdateDate:1,UpdateUserId:1,WarrantyNumber:1},ServiceUnitDetail:{ChargePerHour:1,KmInUse:1,OrderIdService:1,ServiceBy:1,ServiceCharge:1,ServiceDate:1,ServiceHour:1,ServiceUnitCustomerId:1,ServiceUnitDetailId:1,ServiceUnitHm:1,ServiceUnitId:1,ServiceUnitInsertDate:1,ServiceUnitInsertUserId:1,ServiceUnitIsActive:1,ServiceUnitManufactureYear:1,ServiceUnitOrderUnitId:1,ServiceUnitProductId:1,ServiceUnitRemark:1,ServiceUnitSerialNumber:1,ServiceUnitServiceBy:1,ServiceUnitServiceDate:1,ServiceUnitServiceUnitNumber:1,ServiceUnitServiceUnitStatus:1,ServiceUnitType:1,ServiceUnitTypeCategoryUnitId:1,ServiceUnitTypeChargePerHour:1,ServiceUnitTypeContinued:1,ServiceUnitTypeDescription:1,ServiceUnitTypeId:1,ServiceUnitTypeJobCodeNo:1,ServiceUnitTypeProductId:1,ServiceUnitTypeStandartOpTime:1,ServiceUnitUpdateDate:1,ServiceUnitUpdateUserId:1,ServiceUnitWarrantyNumber:1},ServiceUnitType:{CategoryUnitCategoryUnitName:1,CategoryUnitId:1,CategoryUnitPricePerHour:1,ChargePerHour:1,Continued:1,Description:1,JobCodeNo:1,ProductId:1,ServiceUnitType:1,ServiceUnitTypeId:1,StandartOpTime:1},ServiceUnitTypeDetail:{CategoryUnitId:1,ChargePerHour:1,Description:1,JobCodeNo:1,ServiceHour:1,ServiceUnitId:1,ServiceUnitType:1,ServiceUnitTypeCategoryUnitId:1,ServiceUnitTypeChargePerHour:1,ServiceUnitTypeContinued:1,ServiceUnitTypeDescription:1,ServiceUnitTypeDetailId:1,ServiceUnitTypeId:1,ServiceUnitTypeJobCodeNo:1,ServiceUnitTypeProductId:1,ServiceUnitTypeStandartOpTime:1,StandartOpTime:1,TotalCharge:1},ServiceUnitTypePrice:{CategoryUnitCategoryUnitName:1,CategoryUnitId:1,CategoryUnitPricePerHour:1,PricePerHour:1,ServiceUnitTypePriceId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

