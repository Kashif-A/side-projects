using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DootrixChallenge.Auth.DataAccess
{
    public class AuthDbContext : IdentityDbContext<IdentityUser<string>, IdentityRole, string>
    {
        public AuthDbContext(DbContextOptions<AuthDbContext> options) : base(options) { }
        
        /// <summary>
        /// Make email and username unique
        /// </summary>
        /// <param name="builder"></param>
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<IdentityUser<string>>()
                .HasIndex(u => u.Email)
                .IsUnique();
            builder.Entity<IdentityUser<string>>()
                .HasIndex(u => u.UserName)
                .IsUnique();
        }
    }
}
