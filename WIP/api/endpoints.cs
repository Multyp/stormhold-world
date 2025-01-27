[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;

    public UsersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(UserDto userDto)
    {
        if (_context.Users.Any(u => u.Email == userDto.Email))
        {
            return BadRequest("Email is already in use.");
        }

        var user = new User
        {
            Username = userDto.Username,
            Email = userDto.Email,
            HashedPassword = BCrypt.Net.BCrypt.HashPassword(userDto.Password)
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok(new { user.Id, user.Username, user.Email });
    }
}

public class UserDto
{
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}
