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
            })
        }
    })
}