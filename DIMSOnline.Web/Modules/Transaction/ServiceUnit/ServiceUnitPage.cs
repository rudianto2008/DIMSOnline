
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/ServiceUnit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ServiceUnitRow))]
    public class ServiceUnitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/ServiceUnit/ServiceUnitIndex.cshtml");
        }
    }
}