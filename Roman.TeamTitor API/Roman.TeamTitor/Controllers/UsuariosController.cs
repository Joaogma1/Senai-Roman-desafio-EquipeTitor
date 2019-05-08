using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Roman.TeamTitor.Domains;

namespace Roman.TeamTitor.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        [HttpPost("Cadastrar")]
        public IActionResult CadastrarUsuario(Usuarios usuario)
        {
            try
            {
                using (RomanContext ctx = new RomanContext())
                {
                    ctx.Usuarios.Add(usuario);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("Listar")]
        public IActionResult ListarUsuario()
        {
            try
            {
                using (RomanContext ctx = new RomanContext())
                {
                    return Ok(ctx.Usuarios.ToList());
                }
            }
            catch (Exception)
            {

                return BadRequest();
            }
        }
    }
}