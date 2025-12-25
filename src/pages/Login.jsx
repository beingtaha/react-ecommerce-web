import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() 
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => { e.preventDefault();

    // Simple check - agar kuch bhi daala to login ho jaye
    if (username && password)
    {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/products');
    }
    else
    {
      alert('Enter Username and Password');
    }
 };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>Type Anything on username and password</p>
    </div>
  );
}


export default Login;
