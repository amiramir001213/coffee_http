// Menu Component
export function setupMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!menuToggle || !navMenu) return;

  // Toggle menu active state
  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu on clicking outside
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target) && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}