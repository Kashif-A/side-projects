using AspNetCoreIdentity.Practice.Services;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Net.Mail;
using System.Threading.Tasks;

public class AuthMessageSender
{
    public AuthMessageSender(IOptions<AuthMessageSenderOptions> optionsAccessor)
    {
        Options = optionsAccessor.Value;
    }

    public AuthMessageSenderOptions Options { get; } //set only via Secret Manager

    public static async Task<Response> SendEmailAsync(string email, string subject, string message)
    {
        // Plug in your email service here to send an email.
        var apiKey = "SG.jSzEqY3nQn2LpCnh9LYgLA.wo3LBTVsipNLnSQx9qoAphw9T8pzi3cSZVxjvtzf440";
        var client = new SendGridClient(apiKey);
        var from = new EmailAddress("kashif.ahmed@cantarus.com", "Example User");
        var bject = "Sending with SendGrid is Fun";
        var to = new EmailAddress("kashif.ahmed@cantarus.com", "Kashif Ahmed");
        var plainTextContent = "and easy to do anywhere, even with C#";
        var htmlContent = "<strong>and easy to do anywhere, even with C#</strong>";
        var msg = MailHelper.CreateSingleEmail(from, to, bject, plainTextContent, htmlContent);
        var response = await client.SendEmailAsync(msg);
        return response;
    }

    public Task SendSmsAsync(string number, string message)
    {
        // Plug in your SMS service here to send a text message.
        return Task.FromResult(0);
    }
}