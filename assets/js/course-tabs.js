/**
 * Course Tab Filtering Functionality
 * Controls the filtering of course cards based on selected category tab
 */

// Course tab filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.course-tab');
  const cards = document.querySelectorAll('.course-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Reset active tab
      tabs.forEach(t => {
        t.classList.remove('bg-[#4584b6]', 'text-white');
        t.classList.add('bg-white', 'dark:bg-neutral-700', 'text-gray-700', 'dark:text-gray-200', 'hover:bg-gray-200', 'dark:hover:bg-neutral-600');
      });

      // Set active tab
      tab.classList.remove('bg-white', 'dark:bg-neutral-700', 'text-gray-700', 'dark:text-gray-200', 'hover:bg-gray-200', 'dark:hover:bg-neutral-600');
      tab.classList.add('bg-[#4584b6]', 'text-white');

      const category = tab.getAttribute('data-tab');

      // Show all courses or filter by category
      if (category === 'all') {
        cards.forEach(card => card.style.display = 'block');
      } else {
        cards.forEach(card => {
          const cardCategories = card.getAttribute('data-category').split(' ');
          if (cardCategories.includes(category)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });
});