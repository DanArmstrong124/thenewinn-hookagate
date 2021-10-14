const logo = document.getElementById('logo');
const navbar = document.getElementById('nav');
const sec1 = document.getElementById('sec1');

const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const gallery = document.getElementById('gallery');

window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollPosition >= 200){
        logo.classList.add('par-logo');
        logo.classList.remove('logo');
        navbar.classList.add('par-nav');
        navbar.classList.remove('nav');
        sec1.classList.add('par-sec1');
        sec1.classList.remove('sec1');


        home.classList.add('par-nav-link-style');
        about.classList.add('par-nav-link-style');
        contact.classList.add('par-nav-link-style');
        menu.classList.add('par-nav-link-style-active');
        gallery.classList.add('par-nav-link-style');

        home.classList.remove('nav-link-style');
        about.classList.remove('nav-link-style');
        contact.classList.remove('nav-link-style');
        menu.classList.remove('nav-link-style-active');
        gallery.classList.remove('nav-link-style');
    }

    if(scrollPosition <= 199){
        logo.classList.add("logo");
        logo.classList.remove("par-logo");
        navbar.classList.add('nav');
        navbar.classList.remove('par-nav');
        sec1.classList.add('sec1');
        sec1.classList.remove('par-sec1');

        home.classList.remove('par-nav-link-style');
        about.classList.remove('par-nav-link-style');
        contact.classList.remove('par-nav-link-style');
        menu.classList.remove('par-nav-link-style-active');
        gallery.classList.remove('par-nav-link-style');

        home.classList.add('nav-link-style');
        about.classList.add('nav-link-style');
        contact.classList.add('nav-link-style');
        menu.classList.add('nav-link-style-active');
        gallery.classList.add('nav-link-style');
    };
};