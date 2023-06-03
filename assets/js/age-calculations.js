const dayInput = document.querySelector('#day-input');
const monthInput = document.querySelector('#month-input');
const yearInput = document.querySelector('#year-input');

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const calculateAge = () => {
	let years = year - parseInt(yearInput.value);
	let months = Math.abs(parseInt(monthInput.value) - month + 1);
	let days = parseInt(dayInput.value) - day;
	years = document.getElementById('years-output').innerHTML = years;
	months = document.getElementById('months-output').innerHTML = months;
	days = document.getElementById('days-output').innerHTML = days;
};

export { calculateAge };
