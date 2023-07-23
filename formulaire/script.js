// Les contantes creer comme variable

const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');

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

// Ce code permet de checker le mot de passe dans le champs input en precisant de quel type
checkboxPass.onclick = (e) => {
    if(checkboxPass.checked) {
        passwordInput.type = 'text';
    }
    else {
        passwordInput.type = 'password';
    }
}

