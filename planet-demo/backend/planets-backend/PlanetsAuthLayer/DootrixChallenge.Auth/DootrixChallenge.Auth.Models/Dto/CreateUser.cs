using System.ComponentModel.DataAnnotations;

namespace DootrixDemo.Auth.Models.Dto
{
    public class CreateUser
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}