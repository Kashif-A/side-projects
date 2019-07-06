using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace webapp.Controllers
{
    [Route("api/hidden")]
    [Authorize]
    public class HiddenController : Controller
    {
        public IActionResult Index()
        {
            return Content("Hidden area");
        }
    }
}