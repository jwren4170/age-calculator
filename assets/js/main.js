import { validateFormInputs } from './validation.js';
import { calculateAge } from './age-calculations.js';

const button = document.querySelector('.svg');

button.addEventListener('click', (e) => {
	e.preventDefault();
	validateFormInputs();
	calculateAge();
});
