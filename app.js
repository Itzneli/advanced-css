/** @format */

// Add event listener to navigation links
document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('nav a');

	navLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const targetId = link.getAttribute('href').replace('#', '');
			const targetSection = document.getElementById(targetId);
			targetSection.scrollIntoView({ behavior: 'smooth' });
		});
	});
});

// Toggle sidebar on smaller screens
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Menu';
toggleButton.classList.add('toggle-button');

const aside = document.querySelector('aside');
aside.before(toggleButton);

toggleButton.addEventListener('click', () => {
	aside.classList.toggle('open');
});

// Search functionality
const searchForm = document.querySelector('form');
const searchInput = document.querySelector("input[type='search']");

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTerm = searchInput.value.toLowerCase();
	const sections = document.querySelectorAll('section');

	sections.forEach((section) => {
		const sectionText = section.textContent.toLowerCase();
		if (sectionText.includes(searchTerm)) {
			section.classList.add('highlight');
		} else {
			section.classList.remove('highlight');
		}
	});
});
