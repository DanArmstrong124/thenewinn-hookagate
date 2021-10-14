const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const gallery = document.getElementById('gallery');

window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollPosition >= 200){
        home.classList.add('par-nav-link-style-active');
        about.classList.add('par-nav-link-style');
        contact.classList.add('par-nav-link-style');
        menu.classList.add('par-nav-link-style');
        gallery.classList.add('par-nav-link-style');

        home.classList.remove('nav-link-style-active');
        about.classList.remove('nav-link-style');
        contact.classList.remove('nav-link-style');
        menu.classList.remove('nav-link-style');
        gallery.classList.remove('nav-link-style');
    }

    if(scrollPosition <= 199){
        home.classList.remove('par-nav-link-style-active');
        about.classList.remove('par-nav-link-style');
        contact.classList.remove('par-nav-link-style');
        menu.classList.remove('par-nav-link-style');
        gallery.classList.remove('par-nav-link-style');

        home.classList.add('nav-link-style-active');
        about.classList.add('nav-link-style');
        contact.classList.add('nav-link-style');
        menu.classList.add('nav-link-style');
        gallery.classList.add('nav-link-style');
    };
};