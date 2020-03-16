using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Planets.DataAccess;
using Planets.Service;
using Swashbuckle.AspNetCore.Swagger;

namespace Planets
{
    public class Startup
    {
        private readonly string _connectionString;
        public Startup(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<PlanetDbContext>(options => options.UseSqlServer(_connectionString));

            services.AddScoped<IPlanetDataAccess, PlanetDataAccess>();
            services.AddScoped<IPlanetService, PlanetService>();
            
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "DootrixDemo", Version = "v1" });

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

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "MemConnect_CloudAuthConnector v1");
                c.RoutePrefix = string.Empty;
            });

            app.ApplyMigrations<PlanetDbContext>();
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

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
