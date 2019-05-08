using Roman.TeamTitor.Domains;
using Roman.TeamTitor.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.TeamTitor.Repositories
{
    public class TemaRepository : ITemaRepository
    {
        public void AtualizarTema(Temas tema) => throw new NotImplementedException();

        public void CadastrarTema(Temas tema) => throw new NotImplementedException();

        public void DeletarTema(int id) => throw new NotImplementedException();
        
        public List<Temas> ListarTema() => throw new NotImplementedException();
    }
}
