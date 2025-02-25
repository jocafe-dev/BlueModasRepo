﻿using Microsoft.EntityFrameworkCore;

namespace BlueModasDAL.Context
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<ProductModel> Product { get; set; }
        public DbSet<ClientModel> Client { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

    }
}
