
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/ServiceUnitTypePrice"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ServiceUnitTypePriceRow))]
    public class ServiceUnitTypePriceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/ServiceUnitTypePrice/ServiceUnitTypePriceIndex.cshtml");
        }
    }
}