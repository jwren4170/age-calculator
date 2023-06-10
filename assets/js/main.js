import { validateFormInputs } from './validation.js';
import { calculateAge } from './age-calculations.js';
import { formReset } from './form-reset.js';

const button = document.querySelector('.svg');

button.addEventListener('click', (e) => {
	button.style.backgroundColor = '#000';
	e.preventDefault();
	validateFormInputs();
	calculateAge();
	formReset();
});
