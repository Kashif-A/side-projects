﻿using System.ComponentModel.DataAnnotations;

namespace AspNetCoreIdentity.Practice.Controllers
{
    internal class ResetPasswordModel
    {
        public string Token { get; set; }
        public string Email { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Compare("Password")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
    }
}