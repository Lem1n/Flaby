let Google = document.querySelector('.Google_btn');


let Learn = document.querySelector('.Learn_btn');



if (Google.style.backgroundColor === "#ffffff") { Learn.style.backgroundColor = "#4ca3e6"}
else if (Learn.style.backgroundColor === "#ffffff") {Google.style.backgroundColor = "#4ca3e6"}


Google.addEventListener("mouseover", function (){
   Google.style.backgroundColor = "#4ca3e6";
    Google.style.color = "#ffffff";
   Learn.className = "Learn_bt"
    document.querySelector('.Learn_bt').style.backgroundColor = "#ffffff"
    document.querySelector('.Learn_bt').style.color = "#000000"
});
Google.addEventListener("mouseout", function (){
    document.querySelector('.Learn_bt').style.backgroundColor = "#4ca3e6"
    document.querySelector('.Learn_bt').style.color = "#ffffff"
    Google.style.backgroundColor = "#ffffff"
    Google.style.color = "#000000"
    Learn.className = "Learn_btn"

})

Learn.addEventListener("mouseover", function (){
   Learn.style.backgroundColor = "#ffffff";
   Learn.style.color = "#000000"
   Google.className = "Google_bt"
    document.querySelector('.Google_bt').style.backgroundColor = "#4ca3e6"
    document.querySelector('.Google_bt').style.color = "#ffffff"
});
Learn.addEventListener("mouseout", function (){
    Learn.style.backgroundColor = "#4ca3e6";
    Learn.style.color = "#ffffff"
    document.querySelector('.Google_bt').style.backgroundColor = "#ffffff"
    document.querySelector('.Google_bt').style.color = "#000000"
    Google.className = "Google_btn"
});





const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },


    // // Navigation arrows
    navigation: {
        nextEl: '.swiper-custom-button-next',
        prevEl: '.swiper-custom-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

//Pop Up

let PopUp = document.querySelector('.pop_up')
let PopUpX = document.querySelector('.pop_up_close')
let Login = document.querySelectorAll(".login")


Login.forEach(function (Login){
    Login.addEventListener("click", function(e) {
        e.preventDefault()
        PopUp.style.display = "block"
    })
})
PopUpX.addEventListener("click", function() {
    PopUp.style.display = "none"
    PopUpBlock.classList.remove("Register")
    Reg.classList.remove("Register")
    LogBtn.classList.remove("Register")
    RegArrow.classList.remove("Register")
})

PopUp.onclick = function (e){
    if(e.target.className === 'pop_up_container') {
        PopUp.style.display = 'none';
        PopUp.classList.remove('active')
    }
}

//register

let PopUpBlock = document.querySelector('.pop_up_block')
let Reg = document.querySelector(".Reg")
let Regbtn = document.getElementById("RegBtn")
let LogBtn = document.getElementById("LogBtn")
let RegArrow = document.querySelector(".Reg_arrow")

Regbtn.addEventListener("click", function(e) {
    PopUpBlock.classList.add("Register")
    Reg.classList.add("Register")
    LogBtn.classList.add("Register")
    RegArrow.classList.add("Register")
    e.preventDefault()
})

RegArrow.addEventListener("click", function() {
    PopUpBlock.classList.remove("Register")
    Reg.classList.remove("Register")
    LogBtn.classList.remove("Register")
    RegArrow.classList.remove("Register")
});

//scroll

let Home = document.querySelectorAll('.Home')
let Services = document.querySelectorAll('.Services_l')
let Portfolio = document.querySelectorAll('.Portfolio')
let Blog = document.querySelectorAll('.Blog')
let Contact = document.querySelectorAll('.Contact')


Home.forEach( function (Home){
    Home.addEventListener("click", function () {
        scroll ({
            top: 0,
            behavior: 'smooth'
        })
    })
});
Services.forEach( function (Services){
    Services.addEventListener("click", function () {
        scroll ({
            top: 964,
            behavior: 'smooth'
        })
    })
});

Portfolio.forEach( function (Portfolio){
    Portfolio.addEventListener("click", function () {
        scroll ({
            top: 3414,
            behavior: 'smooth'
        })
    })
});

Blog.forEach ( function (Blog) {
    Blog.addEventListener("click", function () {
        scroll({
            top: 4000,
            behavior: 'smooth'
        })
    })
});

Contact.forEach( function (Contact){
    Contact.addEventListener("click", function () {
        scroll ({
            top: 5730,
            behavior: 'smooth'
        })
    })
});



//fixed header

let header = document.querySelector('.header')
let fixed = header.offsetTop;
let Burger = document.querySelector('.burger_menu_block')
let Burger_PopUp = document.querySelector('.Burger_pop_up')
let BurgerMenu = document.querySelector(".burger_menu")


window.addEventListener("scroll", function () {
    if (window["pageYOffset"] > 99) {
        header.classList.add('fixed')
    } else {
        header.style.position = "flex";
        header.classList.remove('fixed');
        BurgerMenu.classList.remove('active');
        Burger_PopUp.classList.remove('active')
    }
});

//Burger menu


Burger.onclick = ( function () {
    BurgerMenu.classList.toggle ('active')
    Burger_PopUp.classList.toggle ('active')
});

const links = document.querySelectorAll(".link")

links.forEach(function (link){
    link.addEventListener("click",closeMenu)
});



function closeMenu (){
    BurgerMenu.classList.remove('active');
    Burger_PopUp.classList.remove('active')
}


//

let AccBtn = document.querySelectorAll(".accordion_item")
let AccContent = document.querySelectorAll(".accordion_content")
let AccBlock = document.querySelector(".accordion_block")



function change(arr, i) {
    arr.forEach( item => {
        item.forEach( i => {i.classList.remove('active')})
        item[i].classList.add('active')
    })
}

for(let i = 0; i < AccBtn.length; i++) {
    AccBtn[i].addEventListener('click', () => {
        change([ AccContent], i)
    })
}

