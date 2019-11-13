using AspNetCoreIdentity.Practice.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Diagnostics;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AspNetCoreIdentity.Practice.Controllers
{
    [Route("api/auth")]
    public class OK : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        public OK(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }
        
        [Authorize]
        [HttpGet]
        [Route("test")]
        public IActionResult Test()
        {
            return Content("test", "text/text");
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel registerModel)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = await _userManager.FindByEmailAsync(registerModel.Email);
                    if (user == null)
                    {
                        user = new IdentityUser
                        {
                            Id = Guid.NewGuid().ToString(),
                            UserName = registerModel.UserName,
                            Email = registerModel.Email
                        };
                        var result = await _userManager.CreateAsync(user, registerModel.Password);

                        if (result.Succeeded)
                        {
                            return Ok();
                        }
                    }
                }
                catch (Exception) { }
            }

            return StatusCode(500);
        }


        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = await _userManager.FindByNameAsync(loginModel.UserName);

                    if (user != null && await _userManager.CheckPasswordAsync(user, loginModel.Password))
                    {
                        var identity = new ClaimsIdentity(".Memconnect");
                        identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
                        identity.AddClaim(new Claim(ClaimTypes.Name, user.UserName));

                        await HttpContext.SignInAsync(".Memconnect", new ClaimsPrincipal(identity));
                        return Content("{\"resp\":\"Logged in Successfully\"}");
                    }
                }
                catch (Exception) { }
            }

            return Content("{\"resp\": \"Invalid Username or Password\"}");
        }
    }
}
