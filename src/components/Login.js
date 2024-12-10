import React, { useState } from 'react'; // Importa React y useState para manejar el estado local.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir entre rutas.
import styles from '../styles/Login.module.css'; // Importa los estilos específicos para el componente.
import Carousel from './Carousel'; // Importa el componente del carrusel.

const Login = () => { // Declara el componente funcional Login.
  const [username, setUsername] = useState(''); // Estado para almacenar el nombre de usuario ingresado.
  const [password, setPassword] = useState(''); // Estado para almacenar la contraseña ingresada.
  const navigate = useNavigate(); // Hook para realizar navegaciones programáticas.

  const handleLogin = (e) => { // Función para manejar el evento de inicio de sesión.
    e.preventDefault(); // Previene el comportamiento por defecto del formulario.

    // Simula la autenticación, por ejemplo, un usuario fijo para pruebas.
    if (username === 'username' && password === 'password') { 
      localStorage.setItem('isAuthenticated', 'true'); // Guarda el estado de autenticación en localStorage.
      navigate('/home'); // Redirige al home si las credenciales son correctas.
    } else {
      alert('Credenciales incorrectas'); // Muestra una alerta si las credenciales son inválidas.
    }
  };

  return (
    <div> 
      <Carousel /> {/* Renderiza el carrusel como parte del diseño de fondo. */}
      <div className={styles.loginBackground}> {/* Contenedor con fondo personalizado. */}
        <div className={styles.loginContainer}> {/* Contenedor principal del formulario de inicio de sesión. */}
          <div className={styles.loginBox}> {/* Caja central para el contenido del formulario. */}
            <h2>Iniciar sesión</h2> {/* Título del formulario. */}
            <form onSubmit={handleLogin}> {/* Manejador del evento submit para el formulario. */}
              <div className={styles.inputGroup}> {/* Contenedor para el campo de usuario. */}
                <label htmlFor="username">Usuario</label> {/* Etiqueta para el campo de usuario. */}
                <input
                  type="text" // Campo de texto para el nombre de usuario.
                  id="username"
                  name="username"
                  value={username} // Valor controlado por el estado username.
                  onChange={(e) => setUsername(e.target.value)} // Actualiza el estado con el valor ingresado.
                  required // Campo obligatorio.
                />
              </div>
              <div className={styles.inputGroup}> {/* Contenedor para el campo de contraseña. */}
                <label htmlFor="password">Contraseña</label> {/* Etiqueta para el campo de contraseña. */}
                <input
                  type="password" // Campo de tipo contraseña.
                  id="password"
                  name="password"
                  value={password} // Valor controlado por el estado password.
                  onChange={(e) => setPassword(e.target.value)} // Actualiza el estado con el valor ingresado.
                  required // Campo obligatorio.
                />
              </div>
              <div className={styles.links}> {/* Contenedor para los enlaces adicionales. */}
                <a href="/forgot-password" className={styles.link}>Olvidé mi clave</a> {/* Enlace para recuperar clave. */}
                <a href="/request-username" className={styles.link}>Solicitar usuario</a> {/* Enlace para solicitar usuario. */}
              </div>
              <button type="submit" className={styles.loginButton}>Ingresar</button> {/* Botón para enviar el formulario. */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; // Exporta el componente Login para su uso en otras partes de la aplicación.
