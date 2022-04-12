"use strict";

const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const result = document.getElementById('result')

var fields = [ first, second, third ];
var selected = 0;
first.focus();

function do_calculate(v1, v2, v3) {
	const i1 = parseInt(v1, 10);
	const i2 = parseInt(v2, 10);
	const i3 = parseInt(v3, 10);

	return `
	<table>
	  <tr> <td> Sum 1: </td> <td><b> ${i1 + i2} </b></td> </tr>
	  <tr> <td> Sum 2: </td> <td><b> ${i2 + i3} </b></td> </tr>
	  <tr> <td> Avg: </td> <td><b> ${((i1+i2+i3)/3).toFixed(2)} </b></td> </tr>
	</table>
	`
}

function handle_keys(e) {
	if (e.which == 40) { // down
		selected++;
		if (selected > 2) { selected = 2; }
		fields[selected].focus();
		fields[selected].select();
		
	}
	if (e.which == 38) {  // up
		selected--;
		if (selected < 0) { selected = 0; }
		fields[selected].focus();
		fields[selected].select();
	}
	result.innerHTML = do_calculate(first.value, second.value, third.value)
}


first.addEventListener('keydown', handle_keys);
second.addEventListener('keydown', handle_keys);
third.addEventListener('keydown', handle_keys);
