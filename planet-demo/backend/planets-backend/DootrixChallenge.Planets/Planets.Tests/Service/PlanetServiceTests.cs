using Microsoft.EntityFrameworkCore;
using Moq;
using Planets.DataAccess;
using Planets.Models;
using Planets.Service;
using System;
using System.Threading.Tasks;
using Xunit;

namespace Planets.Tests.Service
{
    public class PlanetServiceTests
    {
        private MockRepository mockRepository;

        private Mock<IPlanetDataAccess> mockPlanetDataAccess;

        public PlanetServiceTests()
        {
            this.mockRepository = new MockRepository(MockBehavior.Loose);

            this.mockPlanetDataAccess = this.mockRepository.Create<IPlanetDataAccess>();
        }

        private PlanetService CreateService()
        {
            return new PlanetService(
                this.mockPlanetDataAccess.Object);
        }

        [Fact]
        public async Task UpdatePlanet()
        {
            // Arrange
            var service = this.CreateService();
            var options = new DbContextOptionsBuilder<PlanetDbContext>()
                .UseInMemoryDatabase(databaseName: "Update_DbTest")
                .Options;
            using (var context = new PlanetDbContext(options))
            {
                var dataAccess = new PlanetDataAccess(context);
                Guid guid = Guid.NewGuid();
                Planet planet = new Planet()
                {
                    Id = guid,
                    Name = "Mercury",
                    ImageUrl = "https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA-320-80.jpg",
                    DistanceFromSun = 57900000,
                    Mass = "3.301×1023 kg",
                    Diameter = 4879,
                };

                context.Add(planet);

                await context.SaveChangesAsync();

                await dataAccess.UpdatePlanet(new Planet()
                {
                    Id = guid,
                    Name = "Mercury",
                    DistanceFromSun = 0,
                    Mass = "Test",
                    Diameter = 0,
                });

                await context.SaveChangesAsync();

                Planet planetPostUpdate = await context.Planets.FirstAsync(a => a.Id.Equals(guid));
                var p = planetPostUpdate;

                // Assert
                Assert.Equal(planet.Name, p.Name);
                Assert.Equal(0, p.DistanceFromSun);
                Assert.Equal(0, p.Diameter);
            }
        }

        [Fact]
        public async Task GetPlanetByName()
        {
            // Arrange
            var service = this.CreateService();
            var options = new DbContextOptionsBuilder<PlanetDbContext>()
                .UseInMemoryDatabase(databaseName: "GetPlanetByName_DbTest")
                .Options;
            using (var context = new PlanetDbContext(options))
            {
                var dataAccess = new PlanetDataAccess(context);
                Guid guid = Guid.NewGuid();

                context.Add(new Planet()
                {
                    Id = guid,
                    Name = "Mercury",
                    ImageUrl = "https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA-320-80.jpg",
                    DistanceFromSun = 57900000,
                    Mass = "3.301×1023 kg",
                    Diameter = 4879,
                });

                await context.SaveChangesAsync();

                Planet planet = await dataAccess.GetPlanetByName("Mercury");

                // Assert
                Assert.Equal("Mercury", planet.Name);
                Assert.Equal(57900000, planet.DistanceFromSun);
                Assert.Equal(4879, planet.Diameter);
            }
        }
    }
}
