using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Roman.TeamTitor.Domains;
using Roman.TeamTitor.Interfaces;
using Roman.TeamTitor.Repositories;
using Roman.TeamTitor.ViewsModels;

namespace Roman.TeamTitor.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private IUsuarioRepository UsuarioRepository { get; set; }

        public LoginController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult BuscarPorEmailESenha(LoginViewModel login)
        {
            try
            {
                Usuarios usuario = UsuarioRepository.BuscarPorEmailESenha(login.Email, login.Senha);
                if (usuario == null)
                {
                    return NotFound();
                }


                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuario.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuario.Id.ToString()),
                    new Claim("Nome", usuario.Nome),
                    new Claim("Cargo", usuario.IdCargoNavigation.Nome),
                    new Claim("Id", usuario.Id.ToString()),
                    new Claim(ClaimTypes.Role, usuario.IdCargoNavigation.Nome),
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("Roman-titor-chave"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                       issuer: "roman",
                       audience: "roman",
                       claims: claims,
                       expires: DateTime.Now.AddHours(2),
                       signingCredentials: creds);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    
                });
            }
            catch (Exception )
            {
                return BadRequest();
            }
        }
    }
}