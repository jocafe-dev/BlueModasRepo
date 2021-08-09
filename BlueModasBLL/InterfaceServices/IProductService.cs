using BlueModasDAL;
using System.Collections.Generic;

namespace BlueModasBLL.InterfaceServices
{
    public interface IProductService
    {
        IEnumerable<ProductModel> GetAllProducts();
    }
}
