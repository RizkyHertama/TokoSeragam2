
// On Scroll Function
function navMenu(){
    let navBar = document.querySelector('.navbar-sticky'); 
    let scrollTopButton = document.querySelector("#scrollUp"); 
    window.onscroll = function () { 
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 120) {
            navBar.classList.add("navbar-sticky-moved-up");
        } else {
            navBar.classList.remove("navbar-sticky-moved-up");
        }
        // apply transition
        // ! SIMPLE PATCHED
        if (scroll >= 250) {
            navBar.classList.add("navbar-sticky-transitioned");
            if(scrollTopButton) scrollTopButton.classList.add('scrollActive');
        } else {
            navBar.classList.remove("navbar-sticky-transitioned");
            if(scrollTopButton) scrollTopButton.classList.remove('scrollActive');
        }
        // sticky on
        if (scroll >= 500) {
            navBar.classList.add("navbar-sticky-on");
        } else {
            navBar.classList.remove("navbar-sticky-on");
        }
    }
}
navMenu();

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id);
        // ! SIMPLE PATCHED
        if(!obj) return;

        let current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range));
        let timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 10, 2000);
    counter("count2", 100, 20, 3000);
    counter("count3", 0, 30, 4000);
    counter("count4", 0, 10, 2000);
 });

 // APP-SCREEN
 // ! SIMPLE PATCHED
 if(typeof Swiper == 'undefined') Swiper = function(){};
 var swiper = new Swiper( '.swiper-container.app-screen', {
    effect: 'coverflow',
    loop: true,
    autoplaySpeed: 3000,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    paginationClickable: true,
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows : false,
    }
});  

// Side Navigation Bar Close While We click On Navigation Links

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
}) 

// Testimony
var slider = tns({
    container: '#s_testimonies',
    items: 1,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    slideBy: 1,
    mouseDrag: true,
    swipeAngle: false,
    autoplay: true,
    responsive: {
        '957': {
            items: 3,
        },
        '767': {
            items: 2
        }
    }
});
