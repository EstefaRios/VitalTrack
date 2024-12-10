import React, { useState } from 'react'; // Importa React y useState para manejar el estado del componente
import styles from '../styles/RequestUser.module.css'; // Usamos el archivo CSS específico con CSS Modules
import Carousel from './Carousel'; // Importa el carrusel

const RequestUser = () => {
  // Define el estado del formulario, con los campos correspondientes
  const [formData, setFormData] = useState({
    fullName: '', // Nombre completo
    documentType: '', // Tipo de documento
    documentNumber: '', // Número de documento
    corporateEmail: '', // Correo corporativo
    bossEmail: '', // Correo del jefe inmediato
  });
  const [message, setMessage] = useState(''); // Estado para mostrar mensaje de éxito

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Desestructura nombre y valor del campo
    setFormData({ ...formData, [name]: value }); // Actualiza el estado del formulario
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    // Muestra un mensaje de éxito después de enviar el formulario
    setMessage(
      'El correo de solicitud de usuario fue enviado con éxito. Debe esperar a que le asignen su usuario para ingresar a VitalTrack.'
    );
  };

  // Si hay un mensaje de éxito, se muestra el mensaje y el botón de volver
  if (message) {
    return (
      <div>
        <Carousel /> {/* Agrega el carrusel */}
        <div className={styles['request-user-container']}>
          <p className={styles['success-message']}>{message}</p> {/* Muestra el mensaje de éxito */}
          <button
            className={styles['back']}
            onClick={() => (window.location.href = '/')} // Redirige al inicio cuando se hace clic en volver
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  // Si no hay mensaje, se muestra el formulario
  return (
    <div>
      <Carousel /> {/* Agrega el carrusel */}
      <div className={styles['request-user-container']}>
        <h2>Solicitar Usuario</h2> {/* Título del formulario */}
        <form onSubmit={handleSubmit}>
          <div className={styles['input-group']}>
            <label htmlFor="fullName">Nombre Completo</label> {/* Etiqueta para el campo de nombre completo */}
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange} // Actualiza el estado cuando cambia el valor
              required
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="documentType">Tipo de Documento</label> {/* Etiqueta para el tipo de documento */}
            <select
              id="documentType"
              name="documentType"
              value={formData.documentType}
              onChange={handleInputChange} // Actualiza el estado cuando cambia el valor
              required
            >
              <option value="">Seleccione...</option> {/* Opción por defecto */}
              <option value="CC">Cédula de Ciudadanía</option> {/* Opciones de tipo de documento */}
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="PA">Pasaporte</option>
            </select>
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="documentNumber">Número de Documento</label> {/* Etiqueta para el número de documento */}
            <input
              type="text"
              id="documentNumber"
              name="documentNumber"
              value={formData.documentNumber}
              onChange={handleInputChange} // Actualiza el estado cuando cambia el valor
              required
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="corporateEmail">Correo Corporativo</label> {/* Etiqueta para el correo corporativo */}
            <input
              type="email"
              id="corporateEmail"
              name="corporateEmail"
              value={formData.corporateEmail}
              onChange={handleInputChange} // Actualiza el estado cuando cambia el valor
              required
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="bossEmail">Correo del Jefe Inmediato</label> {/* Etiqueta para el correo del jefe inmediato */}
            <input
              type="email"
              id="bossEmail"
              name="bossEmail"
              value={formData.bossEmail}
              onChange={handleInputChange} // Actualiza el estado cuando cambia el valor
              required
            />
          </div>
          <div className={styles['button-group']}>
            <button type="submit" className={styles['send']}> {/* Botón para enviar el formulario */}
              Enviar
            </button>
            <button
              type="button"
              className={styles['back']}
              onClick={() => (window.location.href = '/')} // Redirige al inicio cuando se hace clic en volver
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestUser;
