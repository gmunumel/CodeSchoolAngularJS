using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeSchoolAngularJS.Controllers
{
    public class HomeController : Controller
    {
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

        public ActionResult Angular1()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult ProductDetails()
        {
            return PartialView("~/Views/Home/ProductDetails.cshtml");
        }

        public ActionResult ProductDescriptions()
        {
            return PartialView("~/Views/Home/ProductDescriptions.cshtml");
        }

        public ActionResult ProductSpecs()
        {
            return PartialView("~/Views/Home/ProductSpecs.cshtml");
        }

        public ActionResult ProductReviews()
        {
            return PartialView("~/Views/Home/ProductReviews.cshtml");
        }

        public ActionResult ProductTabs()
        {
            return PartialView("~/Views/Home/ProductTabs.cshtml");
        }

        public ActionResult ProductGallery()
        {
            return PartialView("~/Views/Home/ProductGallery.cshtml");
        }

    }
}