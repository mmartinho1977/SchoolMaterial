using System;
using System.Collections.Generic;

#nullable disable

namespace Hortas.webapi.Models
{
    public partial class Horta
    {
        public Horta()
        {
            HortasZonas = new HashSet<HortasZona>();
        }

        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Concelho { get; set; }
        public bool Activo { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataAtualizacao { get; set; }

        public virtual ICollection<HortasZona> HortasZonas { get; set; }
    }
}
