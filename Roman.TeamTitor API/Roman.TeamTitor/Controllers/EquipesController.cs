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
    public class EquipesController : ControllerBase
    {
        [HttpPost("Cadastrar")]
        public IActionResult CadastrarEquipe(Equipes equipe)
        {
            try
            {
                using (RomanContext ctx = new RomanContext())
                {
                    ctx.Equipes.Add(equipe);
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
        public IActionResult ListarEquipe()
        {
            try
            {
                using (RomanContext ctx = new RomanContext())
                {
                    return Ok(ctx.Equipes.ToList());
                }
            }
            catch (Exception )
            {

                return BadRequest();
            }
        }
    }
}