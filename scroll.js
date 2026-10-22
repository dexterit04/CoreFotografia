// Efecto para que las imágenes aparezcan al bajar (tanto en el inicio como en las galerías)
document.addEventListener("DOMContentLoaded", () => {
  
  // Seleccionamos todas las imágenes que deben tener el efecto
  const imagenes = document.querySelectorAll('.inicio-fotos img, .galeria-servicio img');

  // Configuramos el observador (Intersection Observer)
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      // Si la imagen entra en la pantalla visible...
      if (entrada.isIntersecting) {
        // ...le agregamos la clase 'visible' para que el CSS la muestre
        entrada.target.classList.add('visible');
        // Dejamos de observarla para que no haga la animación dos veces
        observer.unobserve(entrada.target); 
      }
    });
  }, { 
    threshold: 0.1 // Se activa cuando al menos el 10% de la imagen es visible
  });

  // Le decimos al observador que vigile cada imagen
  imagenes.forEach((img) => {
    observer.observe(img);
  });

  // Scroll suave para los enlaces del menú (como ir a #contacto)
  document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener('click', function (e) {
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});