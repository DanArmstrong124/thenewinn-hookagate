const logo = document.getElementById('logo');
const navbar = document.getElementById('nav');
const sec1 = document.getElementById('sec1');


window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollPosition >= 200){
        logo.classList.add('par-logo');
        logo.classList.remove('logo');
        navbar.classList.add('par-nav');
        navbar.classList.remove('nav');
        sec1.classList.add('par-sec1');
        sec1.classList.remove('sec1');

    if(scrollPosition <= 199){
        logo.classList.add("logo");
        logo.classList.remove("par-logo");
        navbar.classList.add('nav');
        navbar.classList.remove('par-nav');
        sec1.classList.add('sec1');
        sec1.classList.remove('par-sec1');
    };
};