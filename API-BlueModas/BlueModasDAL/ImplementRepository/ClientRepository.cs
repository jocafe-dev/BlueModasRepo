using BlueModasDAL.Context;
using BlueModasDAL.InterfaceRepository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace BlueModasDAL.ImplementRepository
{
    public class ClientRepository : IClientRepository
    {
        #region Properties
        private readonly DbContextOptions<ApplicationDbContext> _optionsDB;

        #endregion

        #region Constructors
        public ClientRepository(DbContextOptions<ApplicationDbContext> options)
        {
            _optionsDB = options;
        }
        #endregion

        #region Methods
        public IEnumerable<ClientModel> GetAllClients()
        {
            using (var context = new ApplicationDbContext(_optionsDB))
            {
                return context.Client.AsNoTracking().ToList().OrderBy(x => x.Name);
            };
        }
        #endregion
    }
}
