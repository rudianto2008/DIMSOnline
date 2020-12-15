
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/Province"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProvinceRow))]
    public class ProvinceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/Province/ProvinceIndex.cshtml");
        }
    }
}