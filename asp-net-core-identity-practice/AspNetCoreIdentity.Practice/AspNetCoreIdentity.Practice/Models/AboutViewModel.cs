using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreIdentity.Practice.Models
{
    public class AboutViewModel
    {
        public AboutViewModel(string user)
        {
            this.User = user;
        }
        public string User { get; set; }
    }
}
