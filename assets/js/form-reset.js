const inputs = document.querySelectorAll('.card__header--inputs');
const form = document.querySelector('.card__header--form');

const formReset = () => {
	const isValid = getClassListSuccess();

	if (isValid) {
		inputs.forEach((input) => {
			input.classList.remove('success');
		});
		form.reset();
	} else if (!isValid) {
		return;
	}
};

const getClassListSuccess = () => {
	let isValid = false;

	inputs.forEach((input) => {
		isValid = input.classList.contains('success');
	});

	return isValid;
};

export { formReset };
