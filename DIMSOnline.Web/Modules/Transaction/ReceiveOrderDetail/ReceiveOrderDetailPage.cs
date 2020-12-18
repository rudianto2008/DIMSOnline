
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/ReceiveOrderDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ReceiveOrderDetailRow))]
    public class ReceiveOrderDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/ReceiveOrderDetail/ReceiveOrderDetailIndex.cshtml");
        }
    }
}