using Microsoft.AspNetCore.Mvc;
using webapp.Models;
using webapp.Models.DataManager;
using webapp.Models.Repository;

namespace webapp.Controllers
{
    [Route("/api/Create")]
    public class HomeController : Controller
    {
        private readonly IDataRepository<Employee> _dataRepository;

        public HomeController(IDataRepository<Employee> dataRepository)
        {
            _dataRepository = dataRepository;
        }
        [HttpGet]
        public ViewResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Employee model)
        {
            if (ModelState.IsValid)
            {
                var employee = new Employee();
                employee.name = model.name;
                _dataRepository.Add(employee);
            }

            return View();
        }
    }
}