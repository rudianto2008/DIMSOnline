﻿using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class Configuration
        {
            public static class BinLocation
            {
                public const string BinLocationIndex = "~/Modules/Configuration/BinLocation/BinLocationIndex.cshtml";
            }

            public static class CategoryUnit
            {
                public const string CategoryUnitIndex = "~/Modules/Configuration/CategoryUnit/CategoryUnitIndex.cshtml";
            }

            public static class City
            {
                public const string CityIndex = "~/Modules/Configuration/City/CityIndex.cshtml";
            }

            public static class Company
            {
                public const string CompanyIndex = "~/Modules/Configuration/Company/CompanyIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Configuration/Customer/CustomerIndex.cshtml";
            }

            public static class Island
            {
                public const string IslandIndex = "~/Modules/Configuration/Island/IslandIndex.cshtml";
            }

            public static class MovementType
            {
                public const string MovementTypeIndex = "~/Modules/Configuration/MovementType/MovementTypeIndex.cshtml";
            }

            public static class OrderCategory
            {
                public const string OrderCategoryIndex = "~/Modules/Configuration/OrderCategory/OrderCategoryIndex.cshtml";
            }

            public static class ProductAlternative
            {
                public const string ProductAlternativeIndex = "~/Modules/Configuration/ProductAlternative/ProductAlternativeIndex.cshtml";
            }

            public static class ProductBasePrice
            {
                public const string ProductBasePriceIndex = "~/Modules/Configuration/ProductBasePrice/ProductBasePriceIndex.cshtml";
            }

            public static class ProductPrice
            {
                public const string ProductPriceIndex = "~/Modules/Configuration/ProductPrice/ProductPriceIndex.cshtml";
            }

            public static class Products
            {
                public const string ProductsIndex = "~/Modules/Configuration/Products/ProductsIndex.cshtml";
            }

            public static class ProductsLog
            {
                public const string ProductsLogIndex = "~/Modules/Configuration/ProductsLog/ProductsLogIndex.cshtml";
            }

            public static class ProductType
            {
                public const string ProductTypeIndex = "~/Modules/Configuration/ProductType/ProductTypeIndex.cshtml";
            }

            public static class Province
            {
                public const string ProvinceIndex = "~/Modules/Configuration/Province/ProvinceIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Configuration/Supplier/SupplierIndex.cshtml";
            }

            public static class UnitStock
            {
                public const string UnitStockIndex = "~/Modules/Configuration/UnitStock/UnitStockIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Transaction
        {
            public static class Inventory
            {
                public const string InventoryIndex = "~/Modules/Transaction/Inventory/InventoryIndex.cshtml";
            }

            public static class MovementStock
            {
                public const string MovementStockIndex = "~/Modules/Transaction/MovementStock/MovementStockIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Transaction/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class Orders
            {
                public const string OrdersIndex = "~/Modules/Transaction/Orders/OrdersIndex.cshtml";
            }

            public static class PurchaseOrder
            {
                public const string PurchaseOrderIndex = "~/Modules/Transaction/PurchaseOrder/PurchaseOrderIndex.cshtml";
            }

            public static class PurchaseOrderDetail
            {
                public const string PurchaseOrderDetailIndex = "~/Modules/Transaction/PurchaseOrderDetail/PurchaseOrderDetailIndex.cshtml";
            }

            public static class ReceiveOrder
            {
                public const string ReceiveOrderIndex = "~/Modules/Transaction/ReceiveOrder/ReceiveOrderIndex.cshtml";
            }

            public static class ReceiveOrderDetail
            {
                public const string ReceiveOrderDetailIndex = "~/Modules/Transaction/ReceiveOrderDetail/ReceiveOrderDetailIndex.cshtml";
            }

            public static class SerialNumberUnit
            {
                public const string SerialNumberUnitIndex = "~/Modules/Transaction/SerialNumberUnit/SerialNumberUnitIndex.cshtml";
            }

            public static class ServiceUnit
            {
                public const string ServiceUnitIndex = "~/Modules/Transaction/ServiceUnit/ServiceUnitIndex.cshtml";
            }

            public static class ServiceUnitDetail
            {
                public const string ServiceUnitDetailIndex = "~/Modules/Transaction/ServiceUnitDetail/ServiceUnitDetailIndex.cshtml";
            }

            public static class ServiceUnitType
            {
                public const string ServiceUnitTypeIndex = "~/Modules/Transaction/ServiceUnitType/ServiceUnitTypeIndex.cshtml";
            }

            public static class ServiceUnitTypeDetail
            {
                public const string ServiceUnitTypeDetailIndex = "~/Modules/Transaction/ServiceUnitTypeDetail/ServiceUnitTypeDetailIndex.cshtml";
            }

            public static class ServiceUnitTypePrice
            {
                public const string ServiceUnitTypePriceIndex = "~/Modules/Transaction/ServiceUnitTypePrice/ServiceUnitTypePriceIndex.cshtml";
            }
        }
    }
}

