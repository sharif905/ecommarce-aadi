const dropdownli = document.querySelectorAll("li.dropdown");
dropdownli.forEach(function (e) {
    e.addEventListener("click", function(event){
        this.querySelector("ul").classList.toggle("show");
        event.stopPropagation();
    });
});


$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
// GP carousel 
$('.gpslider').owlCarousel({
    autoplay : true,
    loop: true,
    margin: 20,
    slideSpeed : 300,
    paginationSpeed : 400,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// Brand slider
$('.brand-slider').owlCarousel({
    nav: true,
    pagination : true,
    loop : true,
    dots: false,
    autoplay : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    margin: 20,
    responsive: {
        0: {
            items: 3
        },
        768: {
            items: 4
        },
        1000: {
            items: 8
        }
    }
});
// Slider owl carousel 
$('.owl-carousel').owlCarousel({
    nav : false, // Show next and prev buttons
    pagination : false,
    loop : false,
    autoplay : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    margin: 20,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});
function openNav() {
    document.getElementById("mobile-nav").style.width = "50%";
  }
function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
  }
//
var productImg = document.getElementById("productimg");
var smallImg = document.getElementsByClassName("smallimg");
smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}
// Login/Registration js
var register = document.getElementById("registration");
var login = document.getElementById("login");
function openregister(){
    register.style.height = "100%";
}
function openlogin(){
    login.style.height = "100%";
    register.style.height = "0";
}
function openReg() {
    document.getElementById("registration").style.display = "block";
    document.getElementById("login").style.display = "none";
}
function openLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("registration").style.display = "none";
}
function openUser(){
    document.getElementById("user").style.display = "block";
}
function closeUser(){
    document.getElementById("user").style.display = "none";
}
function openCart(){
    document.getElementById("cart").style.display = "block";
}
function closeCart() {
    document.getElementById("cart").style.display = "none";
 }