using System;
using System.Collections.Generic;

namespace Roman.TeamTitor.Domains
{
    public partial class Usuarios
    {
        public Usuarios()
        {
            Projetos = new HashSet<Projetos>();
        }

        public int Id { get; set; }
        public int IdCargo { get; set; }
        public int IdEquipe { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public Cargos IdCargoNavigation { get; set; }
        public Equipes IdEquipeNavigation { get; set; }
        public ICollection<Projetos> Projetos { get; set; }
    }
}
