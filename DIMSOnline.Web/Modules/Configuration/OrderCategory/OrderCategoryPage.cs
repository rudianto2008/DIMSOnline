
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/OrderCategory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrderCategoryRow))]
    public class OrderCategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/OrderCategory/OrderCategoryIndex.cshtml");
        }
    }
}