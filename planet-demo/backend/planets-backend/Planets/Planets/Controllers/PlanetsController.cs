using System.Collections.Generic;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Planets.Models;
using Planets.Service;

namespace Planets.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces(MediaTypeNames.Application.Json)]

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

        [HttpGet("{name}", Name = "GetPlanetByName")]
        public async Task<IActionResult> GetPlanetByName([FromRoute] string name)
        {
            Planet planet = await _planetService.GetPlanetByName(name);
            return Ok(planet);
        }

        [HttpPut]
        public async Task<IActionResult> UpdatePlanet([FromBody] Planet planet)
        {
            await _planetService.UpdatePlanet(planet);
            return Ok();
        }
    }
}
