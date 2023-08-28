document.addEventListener('DOMContentLoaded', () => {
    Swal.fire({
      title: 'TE HAN CONTACTADO ?',
      html: '<h1>Cuentanolo todo</h1>',
      showConfirmButton: false,
      background: 'black',
      didOpen: (modalElement) => {
        // Agregar la clase de animación a los elementos h1 y p
        const h1 = modalElement.querySelector('h1');
        h1.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
          const p = modalElement.querySelector('.swal2-html-container p');
          p.classList.add('animate__animated', 'animate__fadeIn');
        }, 500); // Añadir una pausa antes de mostrar el párrafo
      }
    });
  });
  
window.onload = () => {
    
      
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}

