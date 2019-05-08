using Roman.TeamTitor.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.TeamTitor.Interfaces
{
    interface IProjetoRepository
    {
        void CadastrarProjeto(Projetos projeto);

        List<Projetos> ListarProjeto();
    }
}
