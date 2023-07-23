const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');


btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
};