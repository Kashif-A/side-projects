using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Planets.Models;
using Planets.Service;

namespace Planets.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanetsController : ControllerBase
    {
        private readonly IPlanetService _planetService;

        public PlanetsController(IPlanetService planetService)
        {
            _planetService = planetService;
        }
        
        [HttpGet]
        public async Task<IActionResult> Planets()
        {
            IEnumerable<Planet> planets = await _planetService.GetAllPlanets();
            return Ok(planets);
        }

        [HttpPut]
        public async Task<IActionResult> UpdatePlanet([FromBody] Planet planet)
        {
            await _planetService.UpdatePlanet(planet);
            return Ok();
        }
    }
}
