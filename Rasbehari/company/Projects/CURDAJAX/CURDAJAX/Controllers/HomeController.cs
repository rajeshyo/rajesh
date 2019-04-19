using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CURDAJAX.Models;

namespace CURDAJAX.Controllers
{
    public class HomeController : Controller
    {

        ModelEmployeeDB empDB = new ModelEmployeeDB();


        public JsonResult Add(ModelEmployee emp)
        {
            return Json(empDB.Add(emp), JsonRequestBehavior.AllowGet);
        }


        public JsonResult List()
        {
            return Json(empDB.ListAll(), JsonRequestBehavior.AllowGet);
        }


        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}