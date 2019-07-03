using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using webapp.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace webapp.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        // GET: /<controller>/
        [HttpGet]
        public IActionResult Test()
        {
            return View();
        }
    }
}
