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
let Login = document.querySelector(".login")


Login.addEventListener("click", function(e) {
    e.preventDefault()
    PopUp.style.display = "block"
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

let Home = document.querySelector('.Home')
let Services = document.querySelector('.Services_l')
let Portfolio = document.querySelector('.Portfolio')
let Blog = document.querySelector('.Blog')
let Contact = document.querySelector('.Contact')


Home.onclick = function () {
    scroll ({
        top: 0,
        behavior: 'smooth'
    })
};
Services.onclick = function () {
    scroll ({
        top: 964,
        behavior: 'smooth'
    })
};

Portfolio.onclick = function () {
    scroll ({
        top: 3114,
        behavior: 'smooth'
    })
};

Blog.onclick = function () {
    scroll ({
        top: 3697,
        behavior: 'smooth'
    })
};

Contact.onclick = function () {
    scroll ({
        top: 5430,
        behavior: 'smooth'
    })
};

//fixed header

let header = document.querySelector('.header')
let fixed = header.offsetTop;
window.addEventListener("scroll", function () {
    if (window["pageYOffset"] > 99) {
        header.classList.add('fixed')
    } else {
        header.style.position = "flex";
        header.classList.remove('fixed')
    }
},)

//Burger menu

let Burger = document.querySelector('.burger_menu_block')
Burger.onclick = ( function () {
    document.querySelector(".burger_menu").classList.toggle ('active')
})











