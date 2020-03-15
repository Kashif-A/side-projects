using System.Security.Claims;
using System.Threading.Tasks;
using DootrixDemo.Auth.Dto;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DootrixChallenge.Auth.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Authorize(AuthenticationSchemes = ".DootrixAuth")]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<IdentityUser<string>> _userManager;

        public AuthenticationController(
            UserManager<IdentityUser<string>> userManager
        )
        {
            _userManager = userManager;
        }

        /// <summary>
        /// Login endpoint
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> Login(Login login)
        {
            IdentityUser<string> user = await _userManager.FindByNameAsync(login.UserName);
            bool isAuthenticated = await _userManager.CheckPasswordAsync(user, login.Password);

            if (isAuthenticated)
            {
                ClaimsIdentity identity = new ClaimsIdentity(".DootrixAuth");
                ClaimsPrincipal authenticatedIdentity = new ClaimsPrincipal(identity);

                await HttpContext.SignInAsync(
                    ".DootrixAuth",
                    authenticatedIdentity);

                return Ok();
            }

            return Unauthorized();
        }

        /// <summary>
        /// Logout endpoint
        /// </summary>
        /// <returns></returns>
        [HttpGet("Logout")]
        public async Task<IActionResult> Logout()
        {
            foreach (var cookie in Request.Cookies.Keys)
            {
                HttpContext.Response.Cookies.Delete(cookie);
            }

            await HttpContext.SignOutAsync(".DootrixAuth");

            return Ok();
        }
    }
}
