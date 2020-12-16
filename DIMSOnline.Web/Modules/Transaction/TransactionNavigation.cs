using Serenity.Navigation;
using MyPages = DIMSOnline.Transaction.Pages;

[assembly: NavigationLink(int.MaxValue, "Transaction/Inventory", typeof(MyPages.InventoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Movement Stock", typeof(MyPages.MovementStockController), icon: null)]