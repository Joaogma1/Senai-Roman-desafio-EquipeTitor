using Roman.TeamTitor.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.TeamTitor.Interfaces
{
    interface ITemaRepository
    {
        void CadastrarTema(Temas tema);

        List<Temas> ListarTema();

        void AtualizarTema(Temas tema);

        void DeletarTema(int id);
    }
}
