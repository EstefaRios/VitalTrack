import React, { useState } from 'react'; // Importa React y useState para manejar el estado en el componente
import styles from '../styles/Menu.module.css'; // Importa los estilos CSS del menú (usando módulos CSS)
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir a otras rutas
import logo from '../assets/images/logo.JPG'; // Importa la imagen del logo

const Menu = () => {
  const navigate = useNavigate(); // Crea la función de navegación

  const [activeItem, setActiveItem] = useState(null); // Estado para el ítem activo del menú
  const [activeSubItem, setActiveSubItem] = useState(null); // Estado para el subítem activo del menú

  // Funciones para manejar el mouse sobre los ítems del menú
  const handleMouseEnter = (item) => setActiveItem(item); // Activa un ítem cuando el mouse entra
  const handleMouseLeave = () => setActiveItem(null); // Desactiva el ítem cuando el mouse sale

  const handleSubMouseEnter = (subItem) => setActiveSubItem(subItem); // Activa un subítem cuando el mouse entra
  const handleSubMouseLeave = () => setActiveSubItem(null); // Desactiva el subítem cuando el mouse sale

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Elimina el estado de autenticación de localStorage
    navigate('/'); // Redirige al inicio (Login)
  };

  return (
    <header className={styles.header}> {/* Contenedor principal del encabezado */}
      <div className={styles.logoContainer}> {/* Contenedor del logo */}
        <img src={logo} alt="Logo VitalTrack" className={styles.logo} /> {/* Logo de la aplicación */}
        <span className={styles.slogan}>Tu plataforma de gestión de salud</span> {/* Lema de la plataforma */}
      </div>
      <nav className={styles.menu}> {/* Contenedor del menú de navegación */}
        <ul className={styles.menuList}> {/* Lista de elementos del menú */}
          <li 
            onClick={() => navigate('/home')} 
            onMouseEnter={() => handleMouseEnter('inicio')} 
            onMouseLeave={handleMouseLeave}
          >
            Inicio
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter('cargue')} 
            onMouseLeave={handleMouseLeave}
          >
            Cargue de archivos
            {activeItem === 'cargue' && ( // Muestra submenú si el ítem 'Cargue' está activo
              <ul className={styles.subMenu}>
                <li
                  onMouseEnter={() => handleSubMouseEnter('cac')}
                  onMouseLeave={handleSubMouseLeave}
                  onClick={() => navigate('/home/cargue-cancer')}
                >
                  Cuenta de alto costo
                  {activeSubItem === 'cac' && ( // Muestra submenú si el subítem 'Cuenta de alto costo' está activo
                    <ul className={styles.subMenu}>
                      <li onClick={() => navigate('/home/cargue-cancer')}>Cargue cáncer</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => navigate('/home/informes')}>Informes</li>
          <li 
            onMouseEnter={() => handleMouseEnter('monitoreos')} 
            onMouseLeave={handleMouseLeave}
          >
            Monitoreos
            {activeItem === 'monitoreos' && ( // Muestra submenú si el ítem 'Monitoreos' está activo
              <ul className={styles.subMenu}>
                <li
                  onMouseEnter={() => handleSubMouseEnter('indicadores')}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => navigate('/home/indicadores-cac-cancer')}
                >
                  Indicadores
                  {activeSubItem === 'indicadores' && ( // Muestra submenú si el subítem 'Indicadores' está activo
                    <ul className={styles.subMenu}>
                      <li onClick={() => navigate('/home/indicadores-cac-cancer')}>Indicadores CAC - Cáncer</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter('cuentas')} 
            onMouseLeave={handleMouseLeave}
          >
            Cuentas CAC
            {activeItem === 'cuentas' && ( // Muestra submenú si el ítem 'Cuentas' está activo
              <ul className={styles.subMenu}>
                <li
                  onMouseEnter={() => handleSubMouseEnter('cancer')}
                  onMouseLeave={handleSubMouseLeave}
                  onClick={() => navigate('/home/cancer-actual')}
                >
                  Cáncer
                  {activeSubItem === 'cancer' && ( // Muestra submenú si el subítem 'Cáncer' está activo
                    <ul className={styles.subMenu}>
                      <li onClick={() => navigate('/home/cancer-actual')}>Cáncer actual</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => navigate('/home/alertas')}>Alertas</li>
          <li 
            onMouseEnter={() => handleMouseEnter('perfil')} 
            onMouseLeave={handleMouseLeave}
          >
            Perfil
            {activeItem === 'perfil' && ( // Muestra submenú si el ítem 'Perfil' está activo
              <ul className={styles.subMenu}>
                <li onClick={handleLogout}>Cerrar sesión</li> {/* Opción para cerrar sesión */}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu; 
