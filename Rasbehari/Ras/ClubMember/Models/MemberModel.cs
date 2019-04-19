using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ClubMember.Models
{
    public class MemberModel
    {
        //To change label title value
        [DisplayName("Member Name")]
        public string Name { get; set; }

        //To change label title value
        [DisplayName("Telephone / Mobile Number")]
        public string PhoneNumber { get; set; }

        //To change label title value
        [DisplayName("Upload File")]
        public string ImagePath { get; set; }

        public HttpPostedFileBase ImageFile { get; set; }
    }
}