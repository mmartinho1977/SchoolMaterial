using System;
using System.Collections.Generic;

#nullable disable

namespace Hortas.webapi.Models
{
    public partial class HortasZona
    {
        public int Id { get; set; }
        public int IdHorta { get; set; }
        public int IdZona { get; set; }
        public decimal Preco { get; set; }
        public bool Activo { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataAtualizacao { get; set; }

        public virtual Horta IdHortaNavigation { get; set; }
        public virtual Zona IdZonaNavigation { get; set; }
    }
}
