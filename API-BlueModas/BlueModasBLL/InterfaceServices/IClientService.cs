using BlueModasDAL;
using System.Collections.Generic;

namespace BlueModasBLL.InterfaceServices
{
    public interface IClientService
    {
        IEnumerable<ClientModel> GetAllClients();
    }
}
