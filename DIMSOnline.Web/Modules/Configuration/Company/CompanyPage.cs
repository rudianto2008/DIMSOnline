
namespace DIMSOnline.Configuration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configuration/Company"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CompanyRow))]
    public class CompanyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configuration/Company/CompanyIndex.cshtml");
        }
    }
}