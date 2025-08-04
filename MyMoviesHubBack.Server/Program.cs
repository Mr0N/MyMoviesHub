var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
// Add services to the container.

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();
app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

