'use strict';
/*
* function that use regex to do fun stuff.
*/

let cashinator = (number) => {
	let temp = '' + number;
	let parts = temp.split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return '$ ' + parts[0] + '.' + (parts[1] || '00');
};

let decashinator = (number) => {
	return number.replace(/[, $]/g, '');
};
