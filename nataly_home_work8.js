// import fetch from 'node-fetch';

// const response = await fetch('https://reqres.in/api/users?page=1&per_page=5');
// const data = await response.json();

// console.log(data);

// import fetch from 'node-fetch';

// const body = {a: 1};

// const response = await fetch('https://reqres.in/api/users?page=1&per_page=5', {
// 	method: 'post',
// 	body: JSON.stringify(body),
// 	headers: {'Content-Type': 'application/json'}
// });
// const data = await response.json();

// console.log(data);
import fetch from 'node-fetch';

try {
	await fetch('https://domain.invalid/');
} catch (error) {
	console.log(error);
}