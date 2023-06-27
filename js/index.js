var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("mobile-navlinks");


menuBtn.onclick = function(){
    if(sideNav.style.left == "-250px"){
        sideNav.style.left ="0";
    }
    else{
        sideNav.style.left ="-250px";
    }
}

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        responsive:{
             0:{
                 items:1
             },
            600:{
                items:2
            },
            1000:{
                items: 3
            }
        }
    });
   

})
