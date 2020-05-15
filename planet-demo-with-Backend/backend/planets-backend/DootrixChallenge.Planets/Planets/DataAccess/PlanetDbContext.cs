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
                    ImageUrl = "https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA-320-80.jpg",
                    DistanceFromSun = 57900000,
                    Mass  = "3.301×1023 kg	",
                    Diameter = 4879,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Venus",
                    ImageUrl = "https://cdn.mos.cms.futurecdn.net/kaPwBjHiUKax8syodHNPmF-320-80.jpg",
                    DistanceFromSun = 108160000,
                    Mass  = "4.867×1024 kg",
                    Diameter = 12104,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Earth",
                    ImageUrl = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2016%2F11%2F999px-Nasa_blue_marble.jpg",
                    DistanceFromSun = 149600000,
                    Mass  = "5.972×1024 kg",
                    Diameter = 12742,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Mars",
                    ImageUrl = "https://space-facts.com/wp-content/uploads/mars.jpg",
                    DistanceFromSun = 227936640,
                    Mass  = "6.417×1023 kg",
                    Diameter = 6779,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Jupiter",
                    ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jupiter%27s_swirling_colourful_clouds.jpg",
                    DistanceFromSun = 778369000,
                    Mass  = "1.899×1027 kg",
                    Diameter = 139820,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Saturn",
                    ImageUrl = "https://cdn.hswstatic.com/gif/saturn-lead-image.jpg",
                    DistanceFromSun = 1427034000,
                    Mass  = "5.685×1026 kg",
                    Diameter = 116460,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Uranus",
                    ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg",
                    DistanceFromSun = 2870658186,
                    Mass  = "8.682×1025 kg",
                    Diameter = 50724,
                },
                new Planet
                {
                    Id = Guid.NewGuid(),
                    Name = "Neptune",
                    ImageUrl = "https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg",
                    DistanceFromSun = 4496976000,
                    Mass  = "1.024×1026 kg",
                    Diameter = 49244,
                }
            );
        }
    }
}