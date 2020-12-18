
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/ProductBasePrice"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductBasePriceRow))]
    public class ProductBasePriceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/ProductBasePrice/ProductBasePriceIndex.cshtml");
        }
    }
}