using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.SqlServer.Management.Sdk.Sfc;
using Planets.Models;

namespace Planets.DataAccess
{
    public class PlanetDataAccess : IPlanetDataAccess
    {
        private readonly PlanetDbContext _dbContext;

        public PlanetDataAccess(PlanetDbContext dbContext)
        {
            _dbContext = dbContext;
        }
            
        public async Task<ReadOnlyList<Planet>> GetAllPlanets()
        {
            ReadOnlyList<Planet> planets = await _dbContext.Planets.ToListAsync();
           return planets;
        }

        public async Task<Planet> GetPlanetByName(string name)
        {
            Planet planet = await _dbContext.Planets.Where(p => p.Name.Equals(name)).FirstOrDefaultAsync();
            return planet;
        }

        public async Task UpdatePlanet(Planet planet)
        {
            Planet planetToUpdate = 
                await _dbContext.Planets
                        .Where(p => p.Id.Equals(planet.Id))
                        .FirstOrDefaultAsync();
            
            if (planetToUpdate != null)
            {
                planetToUpdate.Name = planet.Name;
                planetToUpdate.ImageUrl = planet.ImageUrl;
                planetToUpdate.DistanceFromSun = planet.DistanceFromSun;
                planetToUpdate.Mass = planet.Mass;
                planetToUpdate.Diameter = planet.Diameter;
                _dbContext.Update(planetToUpdate);
            }
            
            await _dbContext.SaveChangesAsync();
        }
    }
}