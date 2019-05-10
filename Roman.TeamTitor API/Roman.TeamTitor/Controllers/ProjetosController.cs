using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Roman.TeamTitor.Domains;

namespace Roman.TeamTitor.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        [HttpPost("Cadastrar")]
        public IActionResult CadastrarProjeto(Projetos projeto)
        {
            try
            {
                using (RomanContext ctx = new RomanContext())
                {
                    ctx.Projetos.Add(projeto);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch (Exception )
            {

                return BadRequest();
            }
        }

        [HttpGet("Listar")]
        public IActionResult ListarProjeto()
        {
            try
            {
                using (RomanContext ctx = new RomanContext())
                {
                    return Ok(ctx.Projetos.Include(x => x.IdAutorNavigation).Include(X => X.IdTemaNavigation).ToList());
                }
                
            }
            catch (Exception )
            {

                return BadRequest();
            }
        }
    }
}