using System.Net;
using System.Text.Json;

namespace ktutech.Presentation.Middlewares;

public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(httpContext, ex);
        }
    }

    private async Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/json";

        // Frontend'in hata yakalaması için 400 döneceğiz
        context.Response.StatusCode = (int)HttpStatusCode.BadRequest;

        // JSON'un 'camelCase' (küçük harfle başlayan) olması frontend (JS/TS) için standarttır
        var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

        var response = new { message = exception.Message };

        var json = JsonSerializer.Serialize(response, options);
        await context.Response.WriteAsync(json);
    }
}