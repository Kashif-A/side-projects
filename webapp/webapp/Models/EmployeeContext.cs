using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapp.Models
{
    public class EmployeeContext : IdentityDbContext<User>
    {

        public EmployeeContext(DbContextOptions options) : base(options) {}

        public DbSet<Employee> Employees { get; set; }

        
    }
}