
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/ServiceUnitTypeDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ServiceUnitTypeDetailRow))]
    public class ServiceUnitTypeDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/ServiceUnitTypeDetail/ServiceUnitTypeDetailIndex.cshtml");
        }
    }
}