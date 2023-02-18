// Componente de inicio de sesión
function InicioSesion({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar verificación de credenciales
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

// Componente de protección de ruta
function RutaProtegida({ component: Component, isAutenticado, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      isAutenticado ? <Component {...props} /> : <Redirect to="/login" />
    )} />
  );
}
