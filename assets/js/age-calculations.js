// get input values
const dayInput = document.querySelector('#day-input');
const monthInput = document.querySelector('#month-input');
const yearInput = document.querySelector('#year-input');

// render output values
let years = document.getElementById('years-output');
let months = document.getElementById('months-output');
let days = document.getElementById('days-output');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

// const leapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// console.log(leapYear);

const calculateAge = () => {
	day < parseInt(dayInput.value)
		? (days.innerHTML = day - parseInt(dayInput.value) + 30)
		: (days.innerHTML = day - parseInt(dayInput.value));

	month < parseInt(monthInput.value)
		? (months.innerHTML = month - parseInt(monthInput.value) + 12)
		: (months.innerHTML = month - parseInt(monthInput.value));

	day < parseInt(dayInput.value) ? (month = month - 1) : (month = month);
	console.log(month);

	month < parseInt(monthInput.value) ? (year = year - 1) : (year = year);
	console.log(year);

	years.innerHTML = year - parseInt(yearInput.value);
};

export { calculateAge };
