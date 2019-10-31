using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Data.Entity.Infrastructure.Annotations;
using System.Security.Claims;
using System.Threading.Tasks;

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
        public CustomUserDbContext() : base("DefaultConnection") { }
        public DbSet<CustomUser> Users { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            var user = modelBuilder.Entity<CustomUser>();
            user.ToTable("UsersIdentityTable");
            user.HasKey(x => x.Id);
            user.Property(x => x.Id).IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);

            user.Property(x => x.UserName).IsRequired().HasMaxLength(256)
                .HasColumnAnnotation("Index", new IndexAnnotation(new IndexAttribute("UserNameIndex") { IsUnique = true }));

            base.OnModelCreating(modelBuilder);
        }

        public class CustomUserStore : IUserPasswordStore<CustomUser, int>
        {
            private readonly CustomUserDbContext context;
            public Task CreateAsync(CustomUser user)
            {
                context.Users.Add(user);
                return context.SaveChangesAsync();
            }

            public Task DeleteAsync(CustomUser user)
            {
                context.Users.Remove(user);
                return context.SaveChangesAsync();
            }

            public void Dispose()
            {
                context.Dispose();
            }

            public Task<CustomUser> FindByIdAsync(int userId)
            {
                throw new NotImplementedException();
            }

            public Task<CustomUser> FindByNameAsync(string userName)
            {
                throw new NotImplementedException();
            }

            public Task<string> GetPasswordHashAsync(CustomUser user)
            {
                throw new NotImplementedException();
            }

            public Task<bool> HasPasswordAsync(CustomUser user)
            {
                throw new NotImplementedException();
            }

            public Task SetPasswordHashAsync(CustomUser user, string passwordHash)
            {
                throw new NotImplementedException();
            }

            public Task UpdateAsync(CustomUser user)
            {
                context.Users.Attach(user);
                return context.SaveChangesAsync();
            }
        }
    }
}
