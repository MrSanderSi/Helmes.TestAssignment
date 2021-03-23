using Logistics.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Logistics.DB;

namespace TestAssignment.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {

        private readonly ILogger<DataController> _logger;
        private ILogisticsServices _logisticsServices;


        public DataController(ILogger<DataController> logger, ILogisticsServices logisticsServices)
        {
            _logger = logger;
            _logisticsServices = logisticsServices;
        }
        [HttpPost]
        public IActionResult AddShippedParcel(Parcel order)
        {
            return Ok(_logisticsServices.CreateParcel(order));
        }
        public IActionResult AddShippedLetter(Letter order)
        {
            return Ok(_logisticsServices.CreateLetter(order));
        }
        [HttpGet]
        public IActionResult GetParcels()
        {
            return Ok(_logisticsServices.GetParcels());
        }
        public IActionResult GetLetters()
        {
            return Ok(_logisticsServices.GetLetters());
        }
    }
}
