using System;
using Microsoft.EntityFrameworkCore;
using Planets.Models;

namespace Planets.DataAccess
{
    public class PlanetDbContext : DbContext
    {
        public PlanetDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Planet> Planets { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Planet>().HasData(
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Mercury",
                    ImageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/venus20191211-16.jpg",
                    DistanceFromSun = 57900000,
                    Mass  = "3.301×1023 kg	",
                    Diameter = 0,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Venus",
                    ImageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/venus20191211-16.jpg",
                    DistanceFromSun = 108160000,
                    Mass  = "4.867×1024 kg",
                    Diameter = 0,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Earth",
                    ImageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/venus20191211-16.jpg",
                    DistanceFromSun = 149600000,
                    Mass  = "5.972×1024 kg",
                    Diameter = 0,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Mars",
                    ImageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/venus20191211-16.jpg",
                    DistanceFromSun = 227936640,
                    Mass  = "6.417×1023 kg",
                    Diameter = 0,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Jupiter",
                    ImageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/venus20191211-16.jpg",
                    DistanceFromSun = 778369000,
                    Mass  = "1.899×1027 kg",
                    Diameter = 0,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Saturn",
                    ImageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/venus20191211-16.jpg",
                    DistanceFromSun = 1427034000,
                    Mass  = "5.685×1026 kg",
                    Diameter = 0,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Uranus",
                    ImageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/venus20191211-16.jpg",
                    DistanceFromSun = 2870658186,
                    Mass  = "8.682×1025 kg",
                    Diameter = 0,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Neptune",
                    ImageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/venus20191211-16.jpg",
                    DistanceFromSun = 4496976000,
                    Mass  = "1.024×1026 kg",
                    Diameter = 0,
                }
            );
        }
    }
}