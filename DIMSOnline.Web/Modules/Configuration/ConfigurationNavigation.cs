using MyPages = DIMSOnline.Configuration.Pages;
using Serenity.Navigation;


[assembly: NavigationLink(int.MaxValue, "Configuration/Company", typeof(MyPages.CompanyController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Location/Island", typeof(MyPages.IslandController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Location/Province", typeof(MyPages.ProvinceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Location/City", typeof(MyPages.CityController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Bin Location", typeof(MyPages.BinLocationController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Category Unit", typeof(MyPages.CategoryUnitController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Customer", typeof(MyPages.CustomerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Movement Type", typeof(MyPages.MovementTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Order Category", typeof(MyPages.OrderCategoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Products", typeof(MyPages.ProductsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Product Price", typeof(MyPages.ProductPriceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Product Base Price", typeof(MyPages.ProductBasePriceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Product Type", typeof(MyPages.ProductTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Product Alternative", typeof(MyPages.ProductAlternativeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Products Log", typeof(MyPages.ProductsLogController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Supplier", typeof(MyPages.SupplierController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Unit Stock", typeof(MyPages.UnitStockController), icon: null)]