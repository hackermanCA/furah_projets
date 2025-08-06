// Burger menu
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll animation
const sections = document.querySelectorAll('.scroll');

const reveal = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Formulaire
document.getElementById('callback-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Merci. Votre demande de rappel confidentiel a bien été envoyée.");
  this.reset();
});
