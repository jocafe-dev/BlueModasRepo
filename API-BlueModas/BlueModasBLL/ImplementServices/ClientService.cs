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
            var obj = _clientRepository.GetAllClients();

            var price = obj.ToString();

            return obj;
        }
        #endregion
    }
}
