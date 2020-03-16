using Microsoft.AspNetCore.Mvc;
using Moq;
using Planets.Controllers;
using Planets.Models;
using Planets.Service;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace Planets.Tests.Controllers
{
    public class PlanetsControllerTests
    {
        private MockRepository mockRepository;

        private Mock<IPlanetService> mockPlanetService;

        public PlanetsControllerTests()
        {
            this.mockRepository = new MockRepository(MockBehavior.Loose);

            this.mockPlanetService = this.mockRepository.Create<IPlanetService>();
        }

        private PlanetsController CreatePlanetsController()
        {
            return new PlanetsController(
                this.mockPlanetService.Object);
        }

        [Fact]
        public async Task Planets_GetAll_Gives200()
        {
            // Arrange
            var planetsController = this.CreatePlanetsController();
            mockPlanetService.Setup(ps => ps.GetAllPlanets())
                .Returns(Task.FromResult(It.IsAny<IEnumerable<Planet>>()));

            // Act
            var result = await planetsController.Planets();
            OkObjectResult okResult = (OkObjectResult)result;

            // Assert
            Assert.Equal(200, okResult.StatusCode);
        }

        [Fact]
        public async Task GetPlanetByName_GivenValidName_ReturnPlanetWith200()
        {
            // Arrange
            var planetsController = this.CreatePlanetsController();
            string name = "Mercury";
            mockPlanetService.Setup(ps => ps.GetPlanetByName("Mercury"))
                .Returns(Task.FromResult(It.IsAny<Planet>()));

            // Act
            var result = await planetsController.GetPlanetByName(name);
            OkObjectResult okResult = (OkObjectResult)result;

            // Assert
            Assert.Equal(200, okResult.StatusCode);
        }

        [Fact]
        public async Task UpdatePlanet_UpdatePlanet_Returns200AfterUpdate()
        {
            // Arrange
            var planetsController = this.CreatePlanetsController();
            Planet planet = new Planet();
            mockPlanetService.Setup(ps => ps.UpdatePlanet(It.IsAny<Planet>())).Returns(Task.FromResult(""));

            // Act
            var result = await planetsController.UpdatePlanet(planet);
            OkResult okResult = (OkResult)result;

            // Assert
            Assert.Equal(200, okResult.StatusCode);
        }
    }
}
