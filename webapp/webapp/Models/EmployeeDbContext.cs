using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace webapp.Models
{
    public class EmployeeDbContext : Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityDbContext<Employee>
        // IdentityDbContext<Employee>
    {
    }
}
