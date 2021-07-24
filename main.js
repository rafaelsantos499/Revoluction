const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute("aria-expanded", active);
    if(active) {
        
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir  Menu')
    }


}

btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    //autoplay: {
    // delay: 8000,
    //disableOnInteraction: false,
  // },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });