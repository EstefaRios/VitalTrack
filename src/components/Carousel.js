import React, { useState, useEffect } from 'react'; // Importa React y hooks para manejar estado y efectos.
import '../styles/Carousel.css'; // Importa los estilos específicos del carrusel.

// Importa las imágenes desde la carpeta src/assets/images/.
import image1 from '../assets/images/image1.jpg'; // Primera imagen del carrusel.
import image2 from '../assets/images/image2.jpg'; // Segunda imagen del carrusel.
import image3 from '../assets/images/image3.jpg'; // Tercera imagen del carrusel.

const images = [image1, image2, image3]; // Array que contiene las imágenes del carrusel.

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0); // Estado que almacena el índice de la imagen actual.

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Cambia a la siguiente imagen, volviendo al inicio al llegar al final.
    }, 5000); // Cambia la imagen cada 5 segundos.

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte para evitar fugas de memoria.
  }, []); // El efecto se ejecuta una vez al montar el componente.

  return (
    <div
      className="carousel-container" // Clase CSS para el contenedor del carrusel.
      style={{
        backgroundImage: `url(${images[currentImage]})`, // Define la imagen de fondo según el índice actual.
        backgroundSize: 'cover', // La imagen cubre todo el contenedor.
        backgroundPosition: 'center', // La imagen está centrada dentro del contenedor.
      }}
    >
      {/* Aquí va el contenido del carrusel, como los textos u otros elementos */}
    </div>
  );
};

export default Carousel; // Exporta el componente para que pueda ser usado en otros archivos.
