
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/Inventory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InventoryRow))]
    public class InventoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/Inventory/InventoryIndex.cshtml");
        }
    }
}