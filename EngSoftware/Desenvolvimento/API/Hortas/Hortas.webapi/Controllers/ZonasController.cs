using Hortas.webapi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hortas.webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ZonasController : ControllerBase
    {


        [HttpGet]
        public IEnumerable<Zona> Get()
        {
            using (var context = new HortasContext())
            {
                return context.Zonas.ToList();

            }
        }

        [HttpGet("{id}")]
        public Zona GetById(int id)
        {
            using (var context = new HortasContext())
            {
                return context.Zonas.Where(z => z.Id == id).FirstOrDefault();
            }
        }


        [HttpPost]
        public int AddZona(Zona zona)
        {
            using (var context = new HortasContext())
            {
                context.Zonas.Add(zona);
                return context.SaveChanges();

            }
        }



        [HttpPut]
        public int UpdateZona(Zona zona)
        {
            using (var context = new HortasContext())
            {
                
                zona.DataAtualizacao = DateTime.Now;

                context.Zonas.Update(zona);
                return context.SaveChanges();
            }
        }

        [HttpDelete]
        public int DeleteZona(Zona zona)
        {
            using (var context = new HortasContext())
            {
                zona.Activo = false;
                zona.DataAtualizacao = DateTime.Now;

                context.Zonas.Update(zona);
                return context.SaveChanges();
            }
        }
    }
}
