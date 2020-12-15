
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/City"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CityRow))]
    public class CityController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/City/CityIndex.cshtml");
        }
    }
}