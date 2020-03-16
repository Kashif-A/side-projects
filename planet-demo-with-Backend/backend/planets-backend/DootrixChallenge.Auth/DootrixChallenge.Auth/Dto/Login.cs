﻿using System.ComponentModel.DataAnnotations;

namespace DootrixDemo.Auth.Dto
{
    public class Login
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
