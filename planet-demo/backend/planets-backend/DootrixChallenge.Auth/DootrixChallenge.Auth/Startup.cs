using DootrixChallenge.Auth.DataAccess;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Reflection;

namespace DootrixChallenge.Auth
{
    public class Startup
    {
        private readonly string _connectionString;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        private IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AuthDbContext>(options => options.UseSqlServer(_connectionString));

            services.AddIdentityCore<IdentityUser<string>>(options =>
            {
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequiredUniqueChars = 4;
                options.Password.RequireLowercase = true;
                options.Password.RequireUppercase = true;
                options.Password.RequireNonAlphanumeric = true;
                options.User.RequireUniqueEmail = true;
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);
            })
                .AddDefaultTokenProviders();

            services.Configure<PasswordHasherOptions>(options =>
            {
                options.IterationCount = 100_000;
                options.CompatibilityMode = PasswordHasherCompatibilityMode.IdentityV3;
            }
            );

            services.AddScoped<UserManager<IdentityUser<string>>>();
            services.AddScoped<IUserStore<IdentityUser<string>>, UserStore<IdentityUser<string>, IdentityRole, AuthDbContext>>();

            services.AddHttpClient();

            services.AddAuthentication(
                options =>
                {
                    options.DefaultChallengeScheme = ".DootrixAuth";
                    options.DefaultAuthenticateScheme = ".DootrixAuth";
                    options.DefaultScheme = ".DootrixAuth";
                    options.DefaultSignInScheme = ".DootrixAuth";
                    options.DefaultSignOutScheme = ".DootrixAuth";
                })
                .AddCookie(".DootrixAuth", options =>
                {
                    options.Cookie.Name = "DootrixAuth";
                    options.Cookie.HttpOnly = true;
                    options.Cookie.Domain = ".eu-west-2.compute.amazonaws.com";
                    options.LoginPath = "/";
                    options.Cookie.MaxAge = TimeSpan.FromHours(1);
                    options.SlidingExpiration = true;
                    options.Cookie.SecurePolicy = CookieSecurePolicy.None;

                });

            services.AddTransient(typeof(ILogger<>), (typeof(Logger<>)));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info { Title = "DootrixDemo.Auth", Version = "v1" });

                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder
                            .WithOrigins()
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowCredentials()
                            .AllowAnyHeader()
                            .Build();
                    });
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();

            if (_connectionString.Length > 1)
            {
                app.ApplyMigrations<AuthDbContext>();
            }           

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "DootrixDemo.Auth v1");
                c.RoutePrefix = string.Empty;
            });

            app.UseCors();
            app.UseMvc();
        }
    }

    public static class DatabaseStartup
    {
        public static void ApplyMigrations<T>(this IApplicationBuilder app) where T : DbContext
        {
            var scopeFactory = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>();

            using (var scope = scopeFactory.CreateScope())
            {
                DbContext dbContext = scope.ServiceProvider.GetRequiredService<T>();

                dbContext.Database.Migrate();
            }
        }
    }
}
