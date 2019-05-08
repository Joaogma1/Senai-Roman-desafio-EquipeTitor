using System;
using System.Collections.Generic;

namespace Roman.TeamTitor.Domains
{
    public partial class Projetos
    {
        public int Id { get; set; }
        public int IdAutor { get; set; }
        public int IdTema { get; set; }
        public string Nome { get; set; }

        public Usuarios IdAutorNavigation { get; set; }
        public Temas IdTemaNavigation { get; set; }
    }
}
