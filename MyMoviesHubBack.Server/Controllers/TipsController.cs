using Microsoft.AspNetCore.Mvc;
using Bogus;

namespace MyMoviesHubBack.Server
{
    class MyType
    {
        public string title { set; get; }
        public string original { set; get; }
        public int year { set; get; }
        public long rating { set; get; }
        public int id { set; get; }
    };
    [ApiController]
    [Route("/api")]
    public class TipsController : ControllerBase
    {
        static IEnumerable<MyType> _tips;
        static TipsController()
        {
            var faker = new Faker<MyType>()
                            .RuleFor(x => x.title, f => f.Lorem.Sentence(3))
                            .RuleFor(x => x.original, f => f.Lorem.Sentence(2))
                            .RuleFor(x => x.year, f => f.Random.Int(1950, 2025))
                            .RuleFor(x => x.rating, f => f.Random.Long(0, 100000))
                            .RuleFor(x => x.id, f => f.Random.Int(1, 9999));

            _tips = faker.Generate(1000); // список з 5 елементів
        }
        [Route("tips")]
        public IActionResult Tips(string query)
        {
            var info = _tips.Where(a => a.title.StartsWith(query, StringComparison.OrdinalIgnoreCase))
                .Take(5)
                .ToList();
            return Ok(info);
        }
        public IActionResult Index()
        {
            return Ok(new { msg = "text message" });
        }
    }
}
