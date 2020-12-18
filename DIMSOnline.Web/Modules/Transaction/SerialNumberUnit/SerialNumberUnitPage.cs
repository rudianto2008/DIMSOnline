
namespace DIMSOnline.Transaction.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Transaction/SerialNumberUnit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SerialNumberUnitRow))]
    public class SerialNumberUnitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Transaction/SerialNumberUnit/SerialNumberUnitIndex.cshtml");
        }
    }
}