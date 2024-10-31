// ======================Scroll section active link ================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Scroll section active link ================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 
// ce code sélectionne tous les éléments <section> de la page et
//  les stocke dans la variable sections, puis il sélectionne tous les liens <a> 
// qui se trouvent dans les balises <nav> du <header> et les stocke dans la variable navLinks.

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*=============================== remove toggle icon and navbar when click navbar link (scroll) ========== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scrol reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-content, .heading, .portofolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed js ============================== */

const typed = new Typed('.multiple-text', {
    strings: ['Developpeur Web Junior', 'Consultant Technico fonctionnel'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });