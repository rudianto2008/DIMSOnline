
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/ReceiveOrder"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ReceiveOrderRow))]
    public class ReceiveOrderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/ReceiveOrder/ReceiveOrderIndex.cshtml");
        }
    }
}