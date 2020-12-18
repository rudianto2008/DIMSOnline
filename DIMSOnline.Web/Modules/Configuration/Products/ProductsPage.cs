
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/Products"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductsRow))]
    public class ProductsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/Products/ProductsIndex.cshtml");
        }
    }
}