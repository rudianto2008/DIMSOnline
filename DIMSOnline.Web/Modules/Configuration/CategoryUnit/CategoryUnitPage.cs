
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/CategoryUnit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CategoryUnitRow))]
    public class CategoryUnitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/CategoryUnit/CategoryUnitIndex.cshtml");
        }
    }
}