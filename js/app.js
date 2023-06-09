$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    dots: true,
    items: 1,
    autoplay: true,
})


// Apply header styles on scroll
window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    header.classList.toggle('active', window.scrollY > 0)
})


// Loader
const loader = document.getElementById('loader');

window.addEventListener('DOMContentLoaded', ()=> {
    loader.style.display = 'none';
});

// Mobile Nav toggler
function toggleNavigation() {
    let mobileNav = document.getElementById('mobile-nav')
    let body = document.querySelector('body')
    if (mobileNav.classList.contains('show')) {
        mobileNav.classList.remove('show')
        body.style.overflowY = 'scroll';
    }
    else{
        mobileNav.classList.add('show')
        body.style.overflowY = 'hidden';
    }
}
