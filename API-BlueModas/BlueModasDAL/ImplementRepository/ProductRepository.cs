using BlueModasDAL.Context;
using BlueModasDAL.InterfaceRepository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace BlueModasDAL.ImplementRepository
{
    public class ProductRepository : IProductRepository
    {
        #region Properties
        private readonly DbContextOptions<ApplicationDbContext> _optionsDB;

        #endregion

        #region Constructors
        public ProductRepository(DbContextOptions<ApplicationDbContext> options)
        {
            _optionsDB = options;
        }
        #endregion

        #region Methods
        public IEnumerable<ProductModel> GetAllProducts()
        {
            using (var context = new ApplicationDbContext(_optionsDB))
            {
                return context.Product.AsNoTracking().ToList().OrderBy(x => x.Name);
            };
        }
        #endregion
    }
}
