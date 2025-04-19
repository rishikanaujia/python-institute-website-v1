/**
 * FAQ Toggle Functionality
 * Controls the accordion behavior of FAQ items
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Toggle FAQ items in the main FAQ section
  function toggleFaq(id) {
    const element = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');

    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      icon.classList.add('rotate-180');
    } else {
      element.classList.add('hidden');
      icon.classList.remove('rotate-180');
    }
  }

  // Make the toggleFaq function available globally
  window.toggleFaq = toggleFaq;

  // Add click event listeners to all FAQ buttons
  const faqButtons = document.querySelectorAll('#faq button');

  faqButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Extract the FAQ ID from the onclick attribute or data attribute
      const faqId = this.getAttribute('data-faq-id') ||
                   this.getAttribute('onclick').match(/toggleFaq\('(.+?)'\)/)[1];

      toggleFaq(faqId);
    });
  });

  // FAQ accordion in the exam info section
  const examFaqButtons = document.querySelectorAll('#faq-tab button');

  examFaqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);

      const content = button.nextElementSibling;
      if (expanded) {
        content.classList.add('hidden');
      } else {
        content.classList.remove('hidden');
      }

      const icon = button.querySelector('svg');
      if (expanded) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>';
      }
    });
  });
});