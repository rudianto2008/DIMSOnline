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
                export const CityId: string;
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
                export const Logo: string;
                export const OfficeType: string;
                export const Phone: string;
                export const ProvinceId: string;
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

    DIMSOnline['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Configuration:{BinLocation:{BinLocation:1,BinLocationId:1,InsertDate:1,InsertUserId:1,IsActive:1,UpdateDate:1,UpdateUserId:1},CategoryUnit:{CategoryUnitId:1,CategoryUnitName:1,PricePerHour:1},City:{CityCode:1,CityId:1,CityName:1,InsertDate:1,InsertUserId:1,IsActive:1,IslandId:1,ProvinceId:1,ProvinceInsertDate:1,ProvinceInsertUserId:1,ProvinceIsActive:1,ProvinceIslandId:1,ProvinceProvinceCode:1,ProvinceProvinceName:1,ProvinceUpdateDate:1,ProvinceUpdateUserId:1,UpdateDate:1,UpdateUserId:1},Company:{Address:1,CityId:1,CompanyId:1,CompanyName:1,ContactPerson:1,DeleteDate:1,DeleteUserId:1,Fax:1,InsertDate:1,InsertUserId:1,IsActive:1,IslandId:1,Logo:1,OfficeType:1,Phone:1,ProvinceId:1,UpdateDate:1,UpdateUserId:1},Customer:{Address:1,BirthDate:1,BirthPlace:1,CityCityCode:1,CityCityName:1,CityId:1,CityInsertDate:1,CityInsertUserId:1,CityIsActive:1,CityIslandId:1,CityProvinceId:1,CityUpdateDate:1,CityUpdateUserId:1,CompanyAddress:1,CompanyCityId:1,CompanyCompanyName:1,CompanyContactPerson:1,CompanyDeleteDate:1,CompanyDeleteUserId:1,CompanyFax:1,CompanyId:1,CompanyInsertDate:1,CompanyInsertUserId:1,CompanyIsActive:1,CompanyIslandId:1,CompanyLogo:1,CompanyOfficeType:1,CompanyPhone:1,CompanyProvinceId:1,CompanyUpdateDate:1,CompanyUpdateUserId:1,ContactPerson:1,CustomerId:1,CustomerName:1,CustomerNumber:1,DeleteDate:1,DeleteUserId:1,Email:1,Fax:1,InsertDate:1,InsertUserId:1,IsActive:1,IslandId:1,IslandInsertDate:1,IslandInsertUserId:1,IslandIsActive:1,IslandIslandCode:1,IslandIslandName:1,IslandUpdateDate:1,IslandUpdateUserId:1,Npwp:1,Phone:1,Pic:1,PostCode:1,ProvinceId:1,ProvinceInsertDate:1,ProvinceInsertUserId:1,ProvinceIsActive:1,ProvinceIslandId:1,ProvinceProvinceCode:1,ProvinceProvinceName:1,ProvinceUpdateDate:1,ProvinceUpdateUserId:1,UpdateDate:1,UpdateUserId:1},Island:{InsertDate:1,InsertUserId:1,IsActive:1,IslandCode:1,IslandId:1,IslandName:1,UpdateDate:1,UpdateUserId:1},MovementType:{MovementTypeId:1,MovementTypeName:1,StatusInOut:1},OrderCategory:{Description:1,InsertDate:1,InsertUserId:1,IsActive:1,OrderCategoryId:1,OrderCategoryName:1,UpdateDate:1,UpdateUserId:1},Province:{InsertDate:1,InsertUserId:1,IsActive:1,IslandId:1,IslandInsertDate:1,IslandInsertUserId:1,IslandIsActive:1,IslandIslandCode:1,IslandIslandName:1,IslandUpdateDate:1,IslandUpdateUserId:1,ProvinceCode:1,ProvinceId:1,ProvinceName:1,UpdateDate:1,UpdateUserId:1}},Transaction:{Inventory:{CompanyId:1,DocumentNo:1,InsertDate:1,InsertUserId:1,InventoryId:1,InventoryStatus:1,IsActive:1,OrderCategoryId:1,ProductBasePrice:1,ProductBasePriceNumber:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductPrice:1,ProductPriceNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,Qty:1,Stock:1,UpdateDate:1,UpdateUserId:1},MovementStock:{Description:1,InsertDate:1,InsertUserId:1,IsActive:1,MovementQty:1,MovementStockId:1,MovementStockNumber:1,MovementTypeId:1,MovementTypeMovementTypeName:1,MovementTypeStatusInOut:1,ProductBinLocationId:1,ProductCategoryUnitId:1,ProductContinued:1,ProductDescription:1,ProductId:1,ProductInsertDate:1,ProductInsertUserId:1,ProductIsActive:1,ProductMinimumStock:1,ProductModelName:1,ProductPartNumber:1,ProductProductImage:1,ProductProductNumber:1,ProductProductTypeId:1,ProductStockQuantity:1,ProductUnitStockId:1,ProductUpdateDate:1,ProductUpdateUserId:1,UpdateDate:1,UpdateUserId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

