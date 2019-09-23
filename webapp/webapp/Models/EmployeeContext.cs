using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace webapp.Models
{
    public class EmployeeContext : IdentityDbContext<User>
    {

        public EmployeeContext(DbContextOptions options) : base(options) {}

        public DbSet<Employee> Employees { get; set; }

        
    }
}