
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/ProductAlternative"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductAlternativeRow))]
    public class ProductAlternativeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/ProductAlternative/ProductAlternativeIndex.cshtml");
        }
    }
}