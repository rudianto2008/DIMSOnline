using Serenity.Navigation;
using MyPages = DIMSOnline.Transaction.Pages;

[assembly: NavigationLink(int.MaxValue, "Transaction/Inventory", typeof(MyPages.InventoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Movement Stock", typeof(MyPages.MovementStockController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Purchase Order", typeof(MyPages.PurchaseOrderController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Purchase Order Detail", typeof(MyPages.PurchaseOrderDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Orders", typeof(MyPages.OrdersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Order Detail", typeof(MyPages.OrderDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Receive Order", typeof(MyPages.ReceiveOrderController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Receive Order Detail", typeof(MyPages.ReceiveOrderDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Serial Number Unit", typeof(MyPages.SerialNumberUnitController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Service Unit", typeof(MyPages.ServiceUnitController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Service Unit Detail", typeof(MyPages.ServiceUnitDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Service Unit Type", typeof(MyPages.ServiceUnitTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Service Unit Type Detail", typeof(MyPages.ServiceUnitTypeDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Transaction/Service Unit Type Price", typeof(MyPages.ServiceUnitTypePriceController), icon: null)]