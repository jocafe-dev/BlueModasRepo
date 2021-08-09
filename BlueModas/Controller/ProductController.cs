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
    public class ProductController : ControllerBase
    {
        #region Properties
        private readonly IProductService _productService;
        #endregion

        #region Constructors
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        #endregion

        // GET: api/<ProductController>
        [HttpGet]
        public ActionResult<IEnumerable<ProductResponseViewModel>> GetAll()
        {
            var products = _productService.GetAllProducts();
            var result = Mapper.Map<IEnumerable<ProductResponseViewModel>>(products);
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
        public void Post([FromBody] string value)
        {
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
