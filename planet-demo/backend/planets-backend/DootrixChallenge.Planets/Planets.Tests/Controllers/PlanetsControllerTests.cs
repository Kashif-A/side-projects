using Moq;
using Planets.Controllers;
using Planets.Models;
using Planets.Service;
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
            this.mockRepository = new MockRepository(MockBehavior.Strict);

            this.mockPlanetService = this.mockRepository.Create<IPlanetService>();
        }

        private PlanetsController CreatePlanetsController()
        {
            return new PlanetsController(
                this.mockPlanetService.Object);
        }

        [Fact]
        public async Task Planets_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var planetsController = this.CreatePlanetsController();

            // Act
            var result = await planetsController.Planets();

            // Assert
            Assert.True(false);
        }

        [Fact]
        public async Task GetPlanetByName_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var planetsController = this.CreatePlanetsController();
            string name = null;

            // Act
            var result = await planetsController.GetPlanetByName(
                name);

            // Assert
            Assert.True(false);
            this.mockRepository.VerifyAll();
        }

        [Fact]
        public async Task UpdatePlanet_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var planetsController = this.CreatePlanetsController();
            Planet planet = null;

            // Act
            var result = await planetsController.UpdatePlanet(
                planet);

            // Assert
            Assert.True(false);
            this.mockRepository.VerifyAll();
        }
    }
}
