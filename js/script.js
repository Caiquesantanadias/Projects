// Dom Elements
const mainpage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middle = document.querySelector('.middle-content')
const btntop = document.querySelector('.btn-top')
const newsFeedPage = document.querySelector('.feeds-page')
const loginmodal = document.querySelector('.login-modal')
const loginForm = document.querySelector('.login-form-btn')
const postbtn = document.querySelector('.post-btn')
const modalwrapper = document.querySelector('.modal-wrapper')
const modal = document.querySelector('.modal')
const postmodalX = document.querySelector('.modal-header i')
const modalPostBtn = document.querySelector('.modal-header button')
const modalFooterPlus = document.querySelector('.modal-foooter span')
const modalInput = document.querySelector('.modal-input')

/******************************************************/
/******************************************************/

//main Page

const goToLoginPage = () => {
    mainpage.style.display = 'none';
    loginPage.style.display = 'grid';
}

middle.addEventListener('click', e =>{
    if(e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    } 
})

btntop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');
    
   if(inputPassword.value == '2023' && inputUserInfo.value == 'caiquedev' ) {
        console.log('Ok')
        mainpage.style.display = 'none';
        newsFeedPage.style.display = 'block';
   } else {
    loginmodal.style.display = 'block'
    goToLoginPage()
   }
})

loginmodal.addEventListener('click', () => {
    const close = document.querySelectorAll('#close')
    loginmodal.style.display = 'none '
}
)
loginForm.addEventListener('click', () =>{
    const loginUser = document.querySelector('.caixa')
    const loginPass = document.querySelector('.caixap')
    if (loginUser.value === 'caiquedeveloper' && loginPass.value === '2023') {
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else {
        loginmodal.style.display = 'block';
        goToLoginPage()
    }
})

// news feed page (post)


postbtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalwrapper.classList.add('modal-wrapper-display')
})

const changeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = y;
}

postmodalX.addEventListener('click', () => {
    modal.style.display = 'none';
    modalwrapper.classList.remove('modal-wrapper-display');

    if(modalInput.value !== "") {
        modalInput.value = "";
        changeOpacity(0.5)
    }
})
modalInput.addEventListener('keypress', (e) => {
    if(e.target.value !== "") {
        changeOpacity(1)
    }
})

modalInput.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        changeOpacity(0.5)
    }
})