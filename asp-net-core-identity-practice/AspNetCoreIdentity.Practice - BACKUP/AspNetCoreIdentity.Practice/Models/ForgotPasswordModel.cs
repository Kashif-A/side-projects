using System.ComponentModel.DataAnnotations;

namespace AspNetCoreIdentity.Practice.Models
{
    public class ForgotPasswordModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}