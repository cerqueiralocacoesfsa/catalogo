const header = document.getElementsByTagName("header");
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('a')
const learnAboutServicesBtn = document.getElementById('learn-about-services-btn')

const openOrCloseMenu = () => { //abre o nav em dispositivos mobile
    btnMenu.classList.toggle('active');
    nav.classList.toggle('active');
}

window.addEventListener("scroll", () => { //diminui o header quando scroll a tela
    if (window.scrollY > 50)
        header[0].classList.add("shrink");
    else {
        header[0].classList.remove("shrink");
    }
});

const scrollToId = (event, closeMenu) => { //scroll suave ao clicar no link do nav
    event.preventDefault();

    const id = event.target.getAttribute('href').replaceAll("#", "");
    const target = document.getElementById(id);

    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    if (nav.classList.contains('active') &&
        btnMenu.classList.contains('active'))
        openOrCloseMenu();
}

navLinks.forEach((link) => { link.addEventListener('click', scrollToId) });
learnAboutServicesBtn.addEventListener('click', (event) => { scrollToId(event) })