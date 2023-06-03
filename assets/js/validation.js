const dayInput = document.querySelector('#day-input');
const monthInput = document.querySelector('#month-input');
const yearInput = document.querySelector('#year-input');

const date = new Date();
const year = date.getFullYear();

const validateFormInputs = () => {
	/* day */
	const months = [4, 6, 9, 11];
	if (dayInput.value.trim() == '') {
		setError(dayInput, 'Required field');
	} else if (!Number(dayInput.value)) {
		setError(dayInput, 'Invalid day');
	} else if (months.includes(parseInt(monthInput.value))) {
		parseInt(dayInput.value) < 1 || parseInt(dayInput.value) > 30
			? setError(dayInput, 'Month has 30 days')
			: setSuccess(dayInput);
	} else {
		setSuccess(dayInput);
	}

	/* month */
	if (monthInput.value.trim() == '') {
		setError(monthInput, 'Required field');
	} else if (!Number(monthInput.value)) {
		setError(monthInput, 'Invalid month');
	} else if (
		parseInt(monthInput.value) < 1 ||
		parseInt(monthInput.value) > 12
	) {
		setError(monthInput, 'Invalid month');
	} else {
		setSuccess(monthInput);
	}

	/* year */
	if (yearInput.value.trim() == '') {
		setError(yearInput, 'Require field');
	} else if (!Number(yearInput.value)) {
		setError(yearInput, 'Invalid year');
	} else if (yearInput.value > year) {
		setError(yearInput, 'Future year');
	} else {
		setSuccess(yearInput);
	}
};

const setError = (element, errorMessage) => {
	const parent = element.parentElement;
	if (parent.classList.contains('success')) {
		parent.classList.remove('success');
	}
	parent.classList.add('error');
	const span = parent.querySelector('span');
	span.textContent = errorMessage;
};

const setSuccess = (element) => {
	const parent = element.parentElement;
	if (parent.classList.contains('error')) {
		parent.classList.remove('error');
	}
	const span = parent.querySelector('span');
	span.style.display = 'none';
	parent.classList.add('success');
};

export { validateFormInputs };
