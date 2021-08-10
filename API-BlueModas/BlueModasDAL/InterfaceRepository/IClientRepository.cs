using System.Collections.Generic;

namespace BlueModasDAL.InterfaceRepository
{
    public interface IClientRepository
    {
        IEnumerable<ClientModel> GetAllClients();
    }
}
