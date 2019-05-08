using Roman.TeamTitor.Controllers;
using Roman.TeamTitor.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.TeamTitor.Interfaces
{
    interface IUsuarioRepository
    {
        void CadastrarUsuario(Usuarios usuario);

        Usuarios BuscarPorEmailESenha(string email, string senha);

        List<Usuarios> ListarUsuario();
    }
}
