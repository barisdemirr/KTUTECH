using FluentValidation;
using ktutech.Business.Validations;
using ktutech.DataAccess.Abstract;
using ktutech.DataAccess.Abstract.Common;
using ktutech.DataAccess.Concrete.EntityFramework.Context;
using ktutech.DataAccess.Concrete.EntityFramework.Repositories.Common;
using ktutech.Presentation.Middlewares;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
    


//---------services-----------

builder.Services.AddControllers();
builder.Services.AddOpenApi();


var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<KtutechDbContext>(options =>
    options.UseSqlServer(connectionString));



builder.Services.Scan(scan => scan
    .FromAssembliesOf(typeof(IGenericRepository<>))
    .AddClasses(classes => classes.Where(type => type.Name.EndsWith("Repository")))
    .AsImplementedInterfaces()
    .WithScopedLifetime());

builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));


builder.Services.AddValidatorsFromAssemblyContaining<RegisterDtoValidator>();
builder.Services.AddValidatorsFromAssemblyContaining<LoginDtoValidator>();


var app = builder.Build();



// -----------Middlewares-----------

app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();




app.Run();
