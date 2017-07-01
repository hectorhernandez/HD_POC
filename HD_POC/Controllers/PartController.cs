using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Linq;
using System;
using Microsoft.AspNetCore.Hosting;
using HD.Services.Interfaces;

namespace HD_POC.Controllers
{    
    [Route("api/[controller]")]
    public class PartController : Controller
    {
        private readonly IHostingEnvironment _appEnvironment;
        private readonly IPartService _partService;

        public PartController(IHostingEnvironment appEnvironment, IPartService partService)
        {
            _appEnvironment = appEnvironment;
            _partService = partService;
        }

        [HttpGet("[action]/{tagNumber}")]
        public async Task<IActionResult> Details(string tagNumber)
        {            
            try
            {
                var partDTO = _partService.GetPart(tagNumber);
                return Ok(partDTO);
            }
            catch
            {
                return BadRequest($"Error getting part details.");
            }
        }

        [HttpGet("[action]/{tagNumber}")]
        public async Task<IActionResult> Movements(string tagNumber)
        {
            try
            {
                var partMovementDTOs = _partService.GetPartMovements(tagNumber);                
                return Ok(partMovementDTOs);                
            }
            catch
            {
                return BadRequest($"Error getting part details.");
            }
        }
    }
}
