const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Toggle menu ketika menu toggle di klik
menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});

// Sembunyikan menu ketika salah satu link di dalam nav-links diklik
links.forEach((link) => {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-links a');

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = document.querySelector('.navbar').offsetHeight; // Adjust for fixed navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const experienceSection = document.getElementById('experience');

  experienceSection.addEventListener('mouseenter', function () {
    if (!this.classList.contains('mouse-entered')) {
      this.classList.add('mouse-entered');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter');
  const images = document.querySelectorAll('.image-item');

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      // Remove active class from all filters
      filters.forEach((f) => f.classList.remove('active'));
      // Add active class to clicked filter
      filter.classList.add('active');

      const filterValue = filter.getAttribute('data-filter');
      images.forEach((image) => {
        if (filterValue === 'all' || image.getAttribute('data-category') === filterValue) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    });
  });
});

var rizqiahmadfatonigmailcomText = document.getElementById('mailTo');
if (rizqiahmadfatonigmailcomText) {
  rizqiahmadfatonigmailcomText.addEventListener('click', function () {
    window.open('https://mail.google.com/mail/?to=rizqiahmadfatoni@gmail.com');
  });
}
