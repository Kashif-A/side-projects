using System.ComponentModel.DataAnnotations;

namespace Planets.Models
{
    public class Planet
    {
        [Required]
        public string Url { get; set; }
        [Required]
        public double DistanceFromSun { get; set; }
        [Required]
        public double Mass { get; set; }
        [Required]
        public double Diameter { get; set; }
    }
}