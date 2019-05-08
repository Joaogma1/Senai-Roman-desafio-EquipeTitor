using Microsoft.EntityFrameworkCore;
using Roman.TeamTitor.Domains;
using Roman.TeamTitor.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.TeamTitor.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        public void CadastrarUsuario(Usuarios usuario) => throw new NotImplementedException();

        public List<Usuarios> ListarUsuario() => throw new NotImplementedException();



        public Usuarios BuscarPorEmailESenha(string email, string senha)
        {
            using (RomanContext ctx = new RomanContext())
            {
                Usuarios usuarioBuscado = ctx.Usuarios.Include(x => x.IdCargoNavigation).FirstOrDefault(x => x.Email == email && x.Senha == senha);
                if (usuarioBuscado == null)
                {
                    return null;
                }
                return usuarioBuscado;
            }
        }
    }
}
