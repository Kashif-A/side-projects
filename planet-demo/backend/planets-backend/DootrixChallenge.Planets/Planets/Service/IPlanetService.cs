using System.Collections.Generic;
using System.Threading.Tasks;
using Planets.Models;

namespace Planets.Service
{
    public interface IPlanetService
    {
        Task<IEnumerable<Planet>> GetAllPlanets();
        Task<Planet> GetPlanetByName(string name);
        Task UpdatePlanet(Planet planet);
    }
}