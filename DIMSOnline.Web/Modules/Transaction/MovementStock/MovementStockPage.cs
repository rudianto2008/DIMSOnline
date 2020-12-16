
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/MovementStock"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MovementStockRow))]
    public class MovementStockController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/MovementStock/MovementStockIndex.cshtml");
        }
    }
}