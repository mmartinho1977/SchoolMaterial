//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Hortas.models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Hortas
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Hortas()
        {
            this.HortasZonas = new HashSet<HortasZonas>();
        }
    
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Concelho { get; set; }
        public bool Activo { get; set; }
        public System.DateTime DataCriacao { get; set; }
        public System.DateTime DataAtualizacao { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<HortasZonas> HortasZonas { get; set; }
    }
}
