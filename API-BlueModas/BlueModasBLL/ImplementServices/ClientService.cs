using BlueModasBLL.InterfaceServices;
using BlueModasDAL;
using BlueModasDAL.InterfaceRepository;
using System.Collections.Generic;

namespace BlueModasBLL.Services
{
    public class ClientService : IClientService
    {
        #region Properties
        private readonly IClientRepository _clientRepository;
        #endregion

        #region Constructors
        public ClientService(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        #endregion

        #region Methods
        public IEnumerable<ClientModel> GetAllClients()
        {
            return _clientRepository.GetAllClients();
        }
        #endregion
    }
}
