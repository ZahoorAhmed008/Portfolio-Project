document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.about_nav a');
    const sections = document.querySelectorAll('.about_container > div');

    function showSection(sectionClass) {
        sections.forEach(section => {
            if (section.classList.contains(sectionClass)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            const targetSection = link.getAttribute('data-text');
            showSection(targetSection);
        });
    });

    if (sections.length > 0) {
        const defaultSectionClass = navLinks[0].getAttribute('data-text');
        showSection(defaultSectionClass);
        navLinks[0].classList.add('active');
    }

});


