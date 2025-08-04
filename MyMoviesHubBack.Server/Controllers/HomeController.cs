using Microsoft.AspNetCore.Mvc;

namespace MyMoviesHubBack.Server.Controller
{
    [ApiController]
    [Route("/api/home")]
    public class HomeController : ControllerBase
    {

        public IActionResult Index()
        {
            return Ok(new {  msg = "text message"});
        }
        [Route("get")]
        public IActionResult Get()
        {
            return Ok(new { msg = "text message" });
        }
    }
}
