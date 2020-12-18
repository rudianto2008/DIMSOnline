
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/ProductsLog"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductsLogRow))]
    public class ProductsLogController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/ProductsLog/ProductsLogIndex.cshtml");
        }
    }
}