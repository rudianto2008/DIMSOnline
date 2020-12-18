
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/UnitStock"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UnitStockRow))]
    public class UnitStockController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/UnitStock/UnitStockIndex.cshtml");
        }
    }
}