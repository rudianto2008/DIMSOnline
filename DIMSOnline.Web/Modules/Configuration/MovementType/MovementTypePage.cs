
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/MovementType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MovementTypeRow))]
    public class MovementTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/MovementType/MovementTypeIndex.cshtml");
        }
    }
}