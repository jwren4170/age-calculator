import { validateFormInputs } from './validation.js';
import { calculateAge } from './age-calculations.js';

const form = document.querySelector('.card__header--form');
const button = document.querySelector('.svg');

button.addEventListener('click', (e) => {
	button.style.backgroundColor = '#000';
	e.preventDefault();
	validateFormInputs();
	calculateAge();
});
