using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hortas.webapi.Models;

namespace Hortas.webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ZonaController : ControllerBase
    {
        private readonly HortasContext _context;

        public ZonaController(HortasContext context)
        {
            _context = context;
        }

        // GET: api/Zona
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Zona>>> GetZonas()
        {
            return await _context.Zonas.ToListAsync();
        }

        // GET: api/Zona/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Zona>> GetZona(int id)
        {
            var zona = await _context.Zonas.FindAsync(id);

            if (zona == null)
            {
                return NotFound();
            }

            return zona;
        }

        // PUT: api/Zona/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutZona(int id, Zona zona)
        {
            if (id != zona.Id)
            {
                return BadRequest();
            }

            _context.Entry(zona).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZonaExists(id))
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

        // POST: api/Zona
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Zona>> PostZona(Zona zona)
        {
            _context.Zonas.Add(zona);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetZona", new { id = zona.Id }, zona);
        }

        // DELETE: api/Zona/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Zona>> DeleteZona(int id)
        {
            var zona = await _context.Zonas.FindAsync(id);
            if (zona == null)
            {
                return NotFound();
            }

            _context.Zonas.Remove(zona);
            await _context.SaveChangesAsync();

            return zona;
        }

        private bool ZonaExists(int id)
        {
            return _context.Zonas.Any(e => e.Id == id);
        }
    }
}
