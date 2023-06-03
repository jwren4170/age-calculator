import { validateFormInputs } from './validation.js';
import { calculateAge } from './age-calculations.js';

const button = document.querySelector('.svg');

button.addEventListener('click', (e) => {
	button.style.backgroundColor = '#000';
	e.preventDefault();
	validateFormInputs();
	calculateAge();
});
