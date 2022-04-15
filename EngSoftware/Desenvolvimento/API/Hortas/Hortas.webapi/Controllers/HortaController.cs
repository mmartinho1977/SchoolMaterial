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
    public class HortaController : ControllerBase
    {
        private readonly HortasContext _context;

        public HortaController(HortasContext context)
        {
            _context = context;
        }

        // GET: api/Horta
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Horta>>> GetHortas()
        {
            return await _context.Hortas.ToListAsync();
        }

        // GET: api/Horta/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Horta>> GetHorta(int id)
        {
            var horta = await _context.Hortas.FindAsync(id);

            if (horta == null)
            {
                return NotFound();
            }

            return horta;
        }

        // PUT: api/Horta/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHorta(int id, Horta horta)
        {
            if (id != horta.Id)
            {
                return BadRequest();
            }

            _context.Entry(horta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HortaExists(id))
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

        // POST: api/Horta
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Horta>> PostHorta(Horta horta)
        {
            _context.Hortas.Add(horta);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHorta", new { id = horta.Id }, horta);
        }

        // DELETE: api/Horta/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Horta>> DeleteHorta(int id)
        {
            var horta = await _context.Hortas.FindAsync(id);
            if (horta == null)
            {
                return NotFound();
            }

            _context.Hortas.Remove(horta);
            await _context.SaveChangesAsync();

            return horta;
        }

        private bool HortaExists(int id)
        {
            return _context.Hortas.Any(e => e.Id == id);
        }
    }
}
