﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_SQL.Models;

namespace API_SQL.Controllers
{
    [Route("api")]
    [ApiController]
    public class ProdutoesController : ControllerBase
    {
        private readonly ProdContext _context;

        public ProdutoesController(ProdContext context)
        {
            _context = context;
        }

        // GET: api/Produtoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Produto>>> GetProdutos()
        {
            return await _context.Produtos.ToListAsync();
        }

        // GET: api/Produtoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Produto>> GetProduto(long id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }

        // PUT: api/Produtoes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduto(long id, Produto produto)
        {
            if (id != produto.Id)
            {
                return BadRequest();
            }

            _context.Entry(produto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Produtoes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Produto>> PostProduto(Produto produto)
        {
            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetProduto", new { id = produto.Id }, produto);
            return CreatedAtAction(nameof(GetProduto), new { id = produto.Id }, produto);
        }

        // DELETE: api/Produtoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Produto>> DeleteProduto(long id)
        {
            var produto = await _context.Produtos.FindAsync(id);
            if (produto == null)
            {
                return NotFound();
            }

            _context.Produtos.Remove(produto);
            await _context.SaveChangesAsync();

            return produto;
        }

        private bool ProdutoExists(long id)
        {
            return _context.Produtos.Any(e => e.Id == id);
        }
    }
}
