
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/Orders"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrdersRow))]
    public class OrdersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/Orders/OrdersIndex.cshtml");
        }
    }
}