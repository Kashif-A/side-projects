﻿using System.Threading.Tasks;
using Microsoft.SqlServer.Management.Sdk.Sfc;
using Planets.Models;

namespace Planets.DataAccess
{
    public interface IPlanetDataAccess
    {
        Task<ReadOnlyList<Planet>> GetAllPlanets();
        Task UpdatePlanet(Planet planet);
    }
}