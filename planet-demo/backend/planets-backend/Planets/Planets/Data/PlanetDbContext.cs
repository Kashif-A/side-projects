using Microsoft.EntityFrameworkCore;
using Planets.Models;

namespace Planets.Data
{
    public class PlanetDbContext : DbContext
    {
        public PlanetDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Planet> CommonPasswords { get; set; }
    }
}