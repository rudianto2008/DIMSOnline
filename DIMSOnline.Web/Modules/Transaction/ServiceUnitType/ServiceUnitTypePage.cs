
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/ServiceUnitType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ServiceUnitTypeRow))]
    public class ServiceUnitTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/ServiceUnitType/ServiceUnitTypeIndex.cshtml");
        }
    }
}