
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/PurchaseOrder"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PurchaseOrderRow))]
    public class PurchaseOrderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/PurchaseOrder/PurchaseOrderIndex.cshtml");
        }
    }
}