
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/ProductType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductTypeRow))]
    public class ProductTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/ProductType/ProductTypeIndex.cshtml");
        }
    }
}