using System;
using System.Collections.Generic;

#nullable disable

namespace Hortas.webapi.Models
{
    public partial class Zona
    {
        public Zona()
        {
            HortasZonas = new HashSet<HortasZona>();
        }

        public int Id { get; set; }
        public string Descricao { get; set; }
        public bool Activo { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataAtualizacao { get; set; }

        public virtual ICollection<HortasZona> HortasZonas { get; set; }
    }
}
