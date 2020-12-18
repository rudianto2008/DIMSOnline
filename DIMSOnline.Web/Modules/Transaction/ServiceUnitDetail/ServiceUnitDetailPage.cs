
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/ServiceUnitDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ServiceUnitDetailRow))]
    public class ServiceUnitDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/ServiceUnitDetail/ServiceUnitDetailIndex.cshtml");
        }
    }
}