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
    public class TemasController : ControllerBase
    {
        [HttpPost("Cadastrar")]
        public IActionResult CadastrarTema(Temas tema)
        {
            try
            {
            using (RomanContext ctx = new RomanContext())
            {
                    ctx.Temas.Add(tema);
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
        public IActionResult ListarTema()
        {
            try
            {
                using (RomanContext ctx = new RomanContext())
                {
                    return Ok(ctx.Temas.ToList());
                }
            }
            catch (Exception )
            {

                return BadRequest();
            }
        }

        [HttpPut("Atualizar")]
        public IActionResult AtualizarTema(Temas tema)
        {
            try
            {
                using (RomanContext ctx = new RomanContext())
                {
                    Temas temaExiste = ctx.Temas.Find(tema.Id);

                    if (temaExiste == null)
                    {
                        return NotFound();
                    }

                    temaExiste.Nome = tema.Nome;

                    ctx.Temas.Update(temaExiste);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch (Exception )
            {

                return BadRequest();
            }
        }

        [HttpDelete("Deletar/{id}")]
        public IActionResult DeletarTema(int id)
        {
            try
            {
                using (RomanContext ctx = new RomanContext())
                {
                    Temas temaProcurado = ctx.Temas.Find(id);

                    if (temaProcurado == null)
                    {
                        return NotFound();
                    }

                    ctx.Temas.Remove(temaProcurado);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch (Exception )
            {

                return BadRequest();
            }
        }
    }
}