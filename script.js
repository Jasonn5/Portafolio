document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Animación de fade-in para las secciones al hacer scroll
    const sections = document.querySelectorAll('section');

    function checkFade() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade(); // Comprueba al cargar la página
});