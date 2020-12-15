
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/Island"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IslandRow))]
    public class IslandController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/Island/IslandIndex.cshtml");
        }
    }
}