using ApiLinx.API.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ApiLinx.API.Data;

namespace ApiLinx.API.Controller
{
    [ApiController]
    [Route("api/produto")]
    public class ControleItem :ControllerBase
    {
        [HttpGet]
        [Route("")]

        public async Task<ActionResult<List<ItemImportado>>> Get([FromServices] Data.DataContext context)
        {
            var produto = await context.Produtos.ToListAsync();
            return produto;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        [Route("")]

        public async Task<ActionResult<ItemImportado>> Post(
            [FromServices] DataContext context,
            [FromBody] ItemImportado model)
        {
            if (ModelState.IsValid)
            {
                context.Produtos.Add(model);
                await context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
