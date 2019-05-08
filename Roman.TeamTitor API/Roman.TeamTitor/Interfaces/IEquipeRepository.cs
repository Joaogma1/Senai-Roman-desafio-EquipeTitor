using Roman.TeamTitor.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.TeamTitor.Interfaces
{
    interface IEquipeRepository
    {
        void CadastrarEquipe(Equipes equipe);

        List<Equipes> ListarEquipe();
    }
}
