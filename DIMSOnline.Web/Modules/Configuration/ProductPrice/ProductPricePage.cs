
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/ProductPrice"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductPriceRow))]
    public class ProductPriceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/ProductPrice/ProductPriceIndex.cshtml");
        }
    }
}