using BlueModasBLL.InterfaceServices;
using BlueModasDAL;
using BlueModasDAL.InterfaceRepository;
using System.Collections.Generic;

namespace BlueModasBLL.Services
{
    public class ProductService : IProductService
    {
        #region Properties
        private readonly IProductRepository _productRepository;
        #endregion

        #region Constructors
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        #endregion

        #region Methods
        public IEnumerable<ProductModel> GetAllProducts()
        {
            return _productRepository.GetAllProducts();
        }
        #endregion
    }
}
