using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Security.Claims;

namespace AspNetIdentity.Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            var username = "kashif@kashif.com";
            var password = "Pwhhhhd@1";

            var userStore = new UserStore<IdentityUser>();
            var userManager = new UserManager<IdentityUser>(userStore);

            var creationResult = userManager.Create(new IdentityUser(username), password);
            Console.WriteLine("Created: {0}", creationResult.Succeeded);
            Console.ReadLine();

            var user = userManager.FindByName(username);
            var claimResult = userManager.AddClaim(user.Id, new Claim("given_name", "kashif"));
            Console.WriteLine("Claim {0}", claimResult.Succeeded);

            var isMatch = userManager.CheckPassword(user, password);
            Console.WriteLine("Password Match {0}", isMatchr);
        }
    }

    public class CustomUser : IUser<int>
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
    }

    public class CustomUserDbContext: DbContext
    {

    }
}
