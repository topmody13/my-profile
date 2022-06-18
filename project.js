const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close"),
    navLink = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {

    navMenu.classList.add("show-menu");
})

navClose.addEventListener("click", () => {

    navMenu.classList.remove("show-menu")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
})


// function linkAction(){
//     const navMenu = document.getElementById("nav-menu");
//     navMenu.classList.remove("show-menu");
// }
// navLink.forEach(link => link.addEventListener("click", linkAction))



// =================== skills============================//
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close"
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.forEach(el => {
    el.addEventListener("click", toggleSkills)
})


//===================== QUALIFICATION TABS =========================//
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabcontent => {
            tabcontent.classList.remove("qualification__active")
        })
        target.classList.add("qualification__active")

        tabs.forEach(tab => {
            tab.classList.remove("qualification__active")
        })
        tab.classList.add("qualification__active")
    })
})

//======================= SERVICE MODAL ======================//
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i)
    })
})

modalCloses.forEach(modalClose => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove("active-modal")
        })
    })
})

//===================== SWIPER PORTFOLIO ========================//
let swiperPortfolio = new Swiper('.portfolio__container', {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//===================== TESTIMONIAL PORTFOLIO ========================//
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetweem: 200,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    // breakpoints:{
    //     568:{
    //         slidesPerview:2,
    //     }
    // }
});


//=================== show scroll top ====================//
// function scrollTop(){
//     const scrollY = window.pageYOffset
//     const scrollup = document.getElementById("scroll-up")
//     if(this.scrollY >560)scrollup.classList.add("show-scroll");
//     else scrollup.classList.remove("show-scroll")
// }
// window.addEventListener("scroll", scrollup)


//========================= DARK / LIGHT =====================/
const themeButton = document.getElementById("theme-button")
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrenticon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener("click", ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrenticon())
})