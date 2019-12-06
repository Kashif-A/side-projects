using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreIdentity.Practice
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            var connectionString = @"Data source=127.0.0.1,1433;user=IdentityPractice;password=password;" +
                "database=IdentityDemo;" +
                "trusted_connection=yes;";

            services.AddDbContext<IdentityDbContext<IdentityUser>>(options => options.UseSqlServer(connectionString));

            services.AddIdentityCore<IdentityUser>(options => {
                options.SignIn.RequireConfirmedEmail = true;
            })
            .AddDefaultTokenProviders();

            services.AddScoped<IUserStore<IdentityUser>, UserOnlyStore<IdentityUser, IdentityDbContext<IdentityUser>>>();

            /*services.AddAuthentication("test")
                .AddCookie("test", options =>
                options.LoginPath = "/Home/Login");*/
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = "test";
            })
                .AddCookie(
                    "test",
                    options =>
                    {
                        options.Cookie.Name = "test";
                        options.LoginPath = new PathString("/Home/Login");
                    });

            // services.AddDefaultIdentity<IdentityUser>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseAuthentication();
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            using (var scope =
  app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            using (var context = scope.ServiceProvider.GetRequiredService<IdentityDbContext<IdentityUser>>())
                context.Database.EnsureCreated();
        }
    }
}
