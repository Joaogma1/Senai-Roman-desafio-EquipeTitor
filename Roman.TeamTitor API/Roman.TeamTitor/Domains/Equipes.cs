using System;
using System.Collections.Generic;

namespace Roman.TeamTitor.Domains
{
    public partial class Equipes
    {
        public Equipes()
        {
            Usuarios = new HashSet<Usuarios>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }

        public ICollection<Usuarios> Usuarios { get; set; }
    }
}
