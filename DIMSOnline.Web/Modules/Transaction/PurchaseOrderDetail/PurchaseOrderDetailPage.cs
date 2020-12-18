﻿
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/PurchaseOrderDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PurchaseOrderDetailRow))]
    public class PurchaseOrderDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/PurchaseOrderDetail/PurchaseOrderDetailIndex.cshtml");
        }
    }
}