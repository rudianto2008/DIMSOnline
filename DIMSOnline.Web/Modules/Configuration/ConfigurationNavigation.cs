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