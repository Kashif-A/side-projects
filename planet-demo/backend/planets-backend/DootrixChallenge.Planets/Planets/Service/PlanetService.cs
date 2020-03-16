using System.Collections.Generic;
using System.Threading.Tasks;
using Planets.DataAccess;
using Planets.Models;

namespace Planets.Service
{
    public class PlanetService : IPlanetService
    {
        private readonly IPlanetDataAccess _planetDataAccess;

        public PlanetService(IPlanetDataAccess planetDataAccess)
        {
            _planetDataAccess = planetDataAccess;
        }
        
        public async Task<IEnumerable<Planet>> GetAllPlanets()
        {
            return await _planetDataAccess.GetAllPlanets();
        }

        public async Task<Planet> GetPlanetByName(string name)
        {
            return await _planetDataAccess.GetPlanetByName(name);
        }

        public async Task UpdatePlanet(Planet planet)
        {
            await _planetDataAccess.UpdatePlanet(planet);
        }
    }
}