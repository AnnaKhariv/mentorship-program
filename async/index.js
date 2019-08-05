window.onload = init;
const count = 10;

function init() {
	const tasks = [task1, task2];
	const buttons = document.getElementsByClassName('btn');

	Object.values(buttons).forEach((button, i) => {
		button.addEventListener('click', tasks[i]);
	});
}

//Make request in sequence
const task1 = async () => {
	clearTable();
	console.clear();
	let fetching = true;
	try {
		setTimeout(() => {
			fetching = false;
		}, 100);

		for (let i = 1; i <= count; i++) {
			if (!fetching) {
				throw 'Request time out';
			}

			const response = await fetch(`https://jsonplaceholder.typicode.com/users/${i}`);
			if (response.ok) {
				const data = await response.json();
				drawTable(data);
			} else {
				throw 'Response failed!';
			}
		}

	} catch (error) {
		console.error(error);
	}
}

//Make request in parallel
function task2() {
	clearTable();
	console.clear();

	const stop = Math.floor(Math.random() * 10) + 1;
	getData(1, stop);
}

function getData(start, stop) {
	for (let i = start; i <= count; i++) {
		if (i === stop) {
			setTimeout(() => {
				console.log('Reconnected!');
				getData(i, 0);
			}, 5000);
			throw 'Unexpected Error';
		}

		fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw 'Response failed!';
				}
			})
			.then(data => {
				drawTable(data);
			})
			.catch(error => {
				console.error(error);
			})
	}
}

function drawTable(line) {
	const tbody = document.getElementById('tbody');
	const tr = document.createElement('tr');

	Object.values(line).map((param, i) => {
		const td = document.createElement('td');
		td.innerText = JSON.stringify(param);
		tr.appendChild(td);
	});

	tbody.appendChild(tr);
}

function clearTable() {
	const tbody = document.getElementById('tbody');
	tbody.innerText = '';
}

