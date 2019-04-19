using ClubMember.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;

namespace ClubMember.Controllers
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

        [HttpGet]
        public ActionResult ContactForm()
        {

            return View();
        }

        [HttpPost]
        public ActionResult ContactForm(MemberModel membervalues)
        {
            //Use Namespace called :  System.IO
            string FileName = Path.GetFileNameWithoutExtension(membervalues.ImageFile.FileName);

            //To Get File Extension
            string FileExtension = Path.GetExtension(membervalues.ImageFile.FileName);

            //Add Current Date To Attached File Name
            FileName = DateTime.Now.ToString("yyyyMMdd")+"-"+FileName.Trim()+ FileExtension;

            //Get Upload path from Web.Config file AppSettings.
            string UploadPath = ConfigurationManager.AppSettings["UserImagePath"].ToString();

            //Its Create complete path to store in server.
            membervalues.ImagePath = UploadPath + FileName;

            //To copy and save file into server.
            membervalues.ImageFile.SaveAs(membervalues.ImagePath);


            //To save Club Member Contact Form Detail to database table.


            var db =  new ClubMemberDataClassesDataContext();

            tblMember _member = new tblMember();

            _member.ImagePath = membervalues.ImagePath;
            _member.MemberName = membervalues.Name;
            _member.PhoneNumber = membervalues.PhoneNumber;

            db.tblMembers.InsertOnSubmit(_member);
            db.SubmitChanges();



            return View();
        }

    }
}