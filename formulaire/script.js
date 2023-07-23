const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');


btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
};

btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
};