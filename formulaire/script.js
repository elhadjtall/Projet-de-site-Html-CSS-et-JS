// Les contantes creer comme variable

const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');

// ce code permet de passer en avant avec un button 
btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
};
//  Ce code permet de retourner en arrière avec un button
btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
};

