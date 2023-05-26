const navSlide = () => {
    const burger = document.querySelector('.burger ');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggling the Nav
        nav.classList.toggle('nav-active');
        });

        //Animating the links
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    });

}

navSlide();
