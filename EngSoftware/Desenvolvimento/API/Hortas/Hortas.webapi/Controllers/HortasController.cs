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
    public class HortasController : ControllerBase
    {


        [HttpGet]
        public IEnumerable<Horta> Get()
        {
            using (var context = new HortasContext())
            {
                return context.Hortas.ToList();

            }
        }

        [HttpGet("{id}")]
        public Horta GetById(int id)
        {
            using (var context = new HortasContext())
            {
                return context.Hortas.Where(h => h.Id == id).FirstOrDefault();
            }
        }


        [HttpPost]
        public int AddHorta(Horta horta)
        {
            using (var context = new HortasContext())
            {
                context.Hortas.Add(horta);
                return context.SaveChanges();

            }
        }



        [HttpPut]
        public int UpdateHorta(Horta horta)
        {
            using (var context = new HortasContext())
            {
                
                horta.DataAtualizacao = DateTime.Now;

                context.Hortas.Update(horta);
                return context.SaveChanges();
            }
        }

        [HttpDelete]
        public int DeleteHorta(Horta horta)
        {
            using (var context = new HortasContext())
            {
                horta.Activo = false;
                horta.DataAtualizacao = DateTime.Now;

                context.Hortas.Update(horta);
                return context.SaveChanges();
            }
        }
    }
}
