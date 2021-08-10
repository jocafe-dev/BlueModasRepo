using AutoMapper;
using BlueModasBLL.InterfaceServices;
using BlueModasDTO.ResponseDTO;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BlueModasAPI.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        #region Properties
        private readonly IClientService _clientService;
        #endregion

        #region Constructors
        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }
        #endregion

        // GET: api/<ProductController>
        [HttpGet]
        public ActionResult<IEnumerable<ClientResponseViewModel>> GetAll()
        {
            var clients = _clientService.GetAllClients();
            var result = Mapper.Map<IEnumerable<ClientResponseViewModel>>(clients);
            return Ok(result);
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ProductController>
        [HttpPost]
        public ActionResult<ClientResponseViewModel> Post([FromBody] ClientResponseViewModel value)
        {
            return Ok(null);
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
