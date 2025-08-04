using Microsoft.AspNetCore.Mvc;

namespace MyMoviesHubBack.Server
{
    record MyType(string title,
                string original,
               int year,
               long rating,
               int id);
    [ApiController]
    [Route("/api")]
    public class TipsController : ControllerBase
    {
        [Route("tips")]
        public IActionResult Tips(string query)
        {
            var myType = new MyType("title", "original", 2023, 5, 1);
            return Ok(new List<MyType>() { myType });
        }
        public IActionResult Index()
        {
            return Ok(new { msg = "text message" });
        }
    }
}
