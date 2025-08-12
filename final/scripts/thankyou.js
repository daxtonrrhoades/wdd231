const form = document.querySelector('.join-form');

const params = new URLSearchParams(window.location.search);

console.log(params.get('first-name'));
console.log(params.get('last-name'));
console.log(params.get('email'));
console.log(params.get('phone'));
console.log(params.get('email-frequency'))
console.log(params.get('timestamp'));

document.querySelector('#form-results').innerHTML =
    `<p>Here is the data you entered:</p>
<p>Name: ${params.get('first-name')} ${params.get('last-name')}</p>
<p>Your Email: ${params.get('email')}</p>
<p>Form submitted on ${params.get('timestamp')}</p>`;