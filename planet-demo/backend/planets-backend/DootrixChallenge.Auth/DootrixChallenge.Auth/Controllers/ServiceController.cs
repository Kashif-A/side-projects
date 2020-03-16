using Microsoft.AspNetCore.Mvc;

namespace DootrixChallenge.Auth.Controllers
{
    /// <summary>
    /// Service endpoint for checking application is working properly
    /// </summary>
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class ServiceController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("DootrixDemo.Auth");
        }
    }
}
