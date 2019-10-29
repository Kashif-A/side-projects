using asp.net.identity.deepDive.Managers;
using asp.net.identity.deepDive.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace asp.net.identity.deepDive.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        private ApplicationUserManager _userManager;
        UserDbContext _DbContext;
        public AccountController(
            ApplicationUserManager userManager,
            UserDbContext userDbContext
        )
        {
            _userManager = userManager;
            _DbContext = userDbContext;
        }
    }
}
