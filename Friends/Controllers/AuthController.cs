using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Friends.Core.Models.Auth;
using Friends.Resources;
using Friends.Settings;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Friends.Controllers
{
    [Route("api/[controller]")]

    public class AuthController : ControllerBase
    {
        private readonly JwtSettings _jwtSettings;
        private readonly UserManager<Account> _userManager;
        private readonly IMapper _mapper;
        private readonly RoleManager<Role> _roleManager;
        public AuthController(IMapper mapper,
            UserManager<Account> userManager,
            RoleManager<Role> roleManager,
            IOptionsSnapshot<JwtSettings> jwtSettings)
        {
            _userManager = userManager;
            _mapper = mapper;
            _roleManager = roleManager;
            _jwtSettings = jwtSettings.Value;
        }
        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] AccountSignUpResource accountSignUpResource)
        {
            var user = _mapper.Map<AccountSignUpResource, Account>(accountSignUpResource);

            var accountCreateResult = await _userManager.CreateAsync(user, accountSignUpResource.Password);

            if (accountCreateResult.Succeeded)
            {
                return Created(string.Empty, string.Empty);
            }

            return Problem(accountCreateResult.Errors.First().Description, null, 500);
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn([FromBody] AccountSignInResource accountSingInResource)
        {
            var account = _userManager.Users.SingleOrDefault(u => u.UserName == accountSingInResource.Email);
            if (account is null)
            {
                return NotFound("User not found");
            }

            var userSigninResult = await _userManager.CheckPasswordAsync(account, accountSingInResource.Password);

            if (userSigninResult)
            {
                var roles = await _userManager.GetRolesAsync(account);
                return Ok(GenerateJwt(account, roles));
            }

            return BadRequest("Email or password incorrect.");
        }
        [HttpPost("Roles")]
        public async Task<IActionResult> CreateRole(string roleName)
        {
            if (string.IsNullOrWhiteSpace(roleName))
            {
                return BadRequest("Role name should be provided.");
            }

            var newRole = new Role
            {
                Name = roleName
            };

            var roleResult = await _roleManager.CreateAsync(newRole);

            if (roleResult.Succeeded)
            {
                return Ok();
            }

            return Problem(roleResult.Errors.First().Description, null, 500);
        }
        [HttpPost("User/{userEmail}/Role")]
        public async Task<IActionResult> AddUserToRole(string userEmail, [FromBody] string roleName)
        {
            var user = _userManager.Users.SingleOrDefault(u => u.UserName == userEmail);
            var result = await _userManager.AddToRoleAsync(user, roleName);

            if (result.Succeeded)
            {
                return Ok();
            }
            return Problem(result.Errors.First().Description, null, 500);
        }
        private string GenerateJwt(Account account, IList<string> roles)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, account.Id.ToString()),
                new Claim(ClaimTypes.Name, account.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, account.Id.ToString())
            };

            var roleClaims = roles.Select(r => new Claim(ClaimTypes.Role, r));
            claims.AddRange(roleClaims);

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Secret));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_jwtSettings.ExpirationInDays));

            var token = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Issuer,
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}