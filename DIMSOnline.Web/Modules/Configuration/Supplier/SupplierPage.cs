
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/Supplier"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SupplierRow))]
    public class SupplierController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/Supplier/SupplierIndex.cshtml");
        }
    }
}