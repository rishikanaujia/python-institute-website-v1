/**
 * Mobile Menu Functionality
 * Controls the mobile navigation menu toggle
 */

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});