using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AspNetCoreIdentity.Practice.Models
{
    public class ExtendedDbContext : IdentityDbContext<IdentityUser>
    {
        public ExtendedDbContext(DbContextOptions<ExtendedDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityUser>(user =>
            user.ToTable("TestTable"));
        }
    }
}
