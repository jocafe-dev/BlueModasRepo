using AutoMapper;
using BlueModasAPI.AutoMapper;
using BlueModasBLL.InterfaceServices;
using BlueModasBLL.Services;
using BlueModasDAL.Context;
using BlueModasDAL.ImplementRepository;
using BlueModasDAL.InterfaceRepository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace BlueModas
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
            services.AddDbContext<ApplicationDbContext>(options =>
              options.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]));

            services.AddAutoMapper();

            services.AddControllers();

            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IClientService, ClientService>();
            services.AddScoped<IClientRepository, ClientRepository>();

            AutoMapperConfiguration.RegisterMappings();
            services.AddCors();
            services.AddMvc();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
            IProductService productService,
            IProductRepository productRepository,
            IClientService clientService,
            IClientRepository clientRepository,
            IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            var allowedOrigins = Configuration["AllowedOrigins"];

            app.UseCors(builder =>
                builder.WithOrigins(allowedOrigins).AllowAnyHeader().AllowAnyMethod().AllowCredentials());


            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
             {
                 endpoints.MapDefaultControllerRoute();
                 endpoints.MapControllers();

             });
        }
    }
}
