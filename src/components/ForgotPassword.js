import React, { useState } from 'react'; // Importa React y el hook useState para manejar estados locales.
import styles from '../styles/ForgotPassword.module.css'; // Importa el archivo CSS module para los estilos específicos de esta página.
import Carousel from './Carousel'; // Importa el componente Carrusel.

const ForgotPassword = () => {
  const [email, setEmail] = useState(''); // Estado para almacenar el valor del campo de correo electrónico.
  const [message, setMessage] = useState(''); // Estado para mostrar un mensaje al usuario después de enviar el formulario.

  const handleSubmit = (e) => { // Función para manejar el evento de envío del formulario.
    e.preventDefault(); // Evita el comportamiento por defecto del formulario (recarga de página).
    setMessage(`Se ha enviado un recordatorio a ${email}`); // Actualiza el mensaje con el correo ingresado.
  };

  return (
    <div>
      <Carousel /> {/* Renderiza el componente Carrusel en la parte superior. */}
      <div className={styles.loginContainer}> {/* Contenedor principal de la página. */}
        <div className={styles.loginBox}> {/* Caja para el formulario y el contenido central. */}
          <h2>Olvidé mi clave</h2> {/* Título de la página. */}
          <form onSubmit={handleSubmit}> {/* Formulario con un manejador de evento para el envío. */}
            <div className={styles.inputGroup}> {/* Grupo de entrada con estilos personalizados. */}
              <label htmlFor="email">Correo Electrónico</label> {/* Etiqueta del campo de entrada. */}
              <input
                type="email" // Campo de entrada para el correo electrónico.
                id="email" // ID del campo de entrada.
                name="email" // Nombre del campo, útil para formularios.
                value={email} // Valor del estado del correo electrónico.
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado cuando el usuario escribe.
                required // Hace que el campo sea obligatorio.
              />
            </div>
            <div className={styles.buttonGroup}> {/* Grupo de botones con estilos personalizados. */}
              <button type="submit" className={styles.loginButton}>Enviar</button> {/* Botón para enviar el formulario. */}
              <button
                type="button" // Botón de tipo estándar (no envía formulario).
                className={styles.loginButton} // Clase CSS para los estilos.
                onClick={() => (window.location.href = '/')} // Redirige al usuario al inicio.
              >
                Volver
              </button>
            </div>
          </form>
          {message && <p className={styles.successMessage}>{message}</p>} {/* Muestra un mensaje de éxito si existe. */}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; // Exporta el componente para usarlo en otras partes de la aplicación.
