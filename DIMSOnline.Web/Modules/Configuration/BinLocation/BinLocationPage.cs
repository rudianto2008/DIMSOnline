
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/BinLocation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BinLocationRow))]
    public class BinLocationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/BinLocation/BinLocationIndex.cshtml");
        }
    }
}