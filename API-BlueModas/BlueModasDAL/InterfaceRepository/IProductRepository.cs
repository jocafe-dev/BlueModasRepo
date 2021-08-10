using System.Collections.Generic;

namespace BlueModasDAL.InterfaceRepository
{
    public interface IProductRepository
    {
        IEnumerable<ProductModel> GetAllProducts();
    }
}
