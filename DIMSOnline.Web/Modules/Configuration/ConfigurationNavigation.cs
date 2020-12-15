using MyPages = DIMSOnline.Configuration.Pages;
using Serenity.Navigation;


[assembly: NavigationLink(int.MaxValue, "Configuration/Company", typeof(MyPages.CompanyController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Island", typeof(MyPages.IslandController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/Province", typeof(MyPages.ProvinceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Configuration/City", typeof(MyPages.CityController), icon: null)]