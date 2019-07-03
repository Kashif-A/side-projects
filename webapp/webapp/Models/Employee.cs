using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webapp.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string name { get; set; }
        public Employee() { }
        public Employee(int _id, string _name)
        {
            Id = _id;
            name = _name;
        }
    }
}
