const buttons = document.querySelectorAll('.toggle-btn');
const sections = document.querySelectorAll('.section');
const images = document.querySelectorAll('.toggle-image');
let activeButton = document.querySelector('.button-active');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (activeButton) {
            activeButton.classList.remove('button-active');
        }
        button.classList.add('button-active');
        activeButton = button;

        const targetId = button.getAttribute('data-target');
        const targetImageId = button.getAttribute('data-img');

        images.forEach(image => {
            if (image.id === targetImageId) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        });

        sections.forEach(section => {
            section.style.display = 'none';
        });

        document.getElementById(targetId).style.display = 'block';
    });
});

// Show the "about_us_section" by default
document.getElementById('about_us_section').style.display = 'block';