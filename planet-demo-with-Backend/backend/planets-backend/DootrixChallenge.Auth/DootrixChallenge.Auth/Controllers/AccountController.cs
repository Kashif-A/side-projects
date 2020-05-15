using System;
using System.Linq;
using System.Threading.Tasks;
using DootrixDemo.Auth.Dto;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace DootrixChallenge.Auth.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<IdentityUser<string>> _userManager;
        private readonly ILogger<AccountController> _logger;

        public AccountController(UserManager<IdentityUser<string>> userManager, ILogger<AccountController> logger)
        {
            _userManager = userManager;
            _logger = logger;
        }
        
        /// <summary>
        /// Create a new User
        /// </summary>
        /// <param name="createUser"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("CreateUser")]
        public async Task<IActionResult> CreateUserAsync(CreateUser createUser)
        {
            var user = await _userManager.FindByEmailAsync(createUser.Email);
            if (user == null)
            {
                user = new IdentityUser<string>
                {
                    Id = Guid.NewGuid().ToString(),
                    UserName = createUser.UserName,
                    Email = createUser.Email
                };

                var result = await _userManager.CreateAsync(user, createUser.Password);

                if (result.Succeeded)
                {
                    _logger.Log(LogLevel.Information, $"User with the username {user.UserName} created successfully...");
                    return Ok();
                }

                string output = JsonConvert.SerializeObject(result.Errors.ToList());
                return Content(output);
            }
            
            return BadRequest();
            
        }
    }
}
