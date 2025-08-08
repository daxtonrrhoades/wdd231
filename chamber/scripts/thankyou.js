const form = document.querySelector('.join-form');

const params = new URLSearchParams(window.location.search);

console.log(params.get('first-name'));
console.log(params.get('last-name'));
console.log(params.get('email'));
console.log(params.get('phone'));
console.log(params.get('organization-name'));
console.log(params.get('membership'));
console.log(params.get('timestamp'));

document.querySelector('#form-results').innerHTML =
    `<p>Here is the data you entered:</p>
<p>Name: ${params.get('first-name')} ${params.get('last-name')}</p>
<p>Your Email: ${params.get('email')}</p>
<p>Your Phone Number: ${params.get('phone')}</p>
<p>Organization Name: ${params.get('organization-name')}</p>
<p>Membership Level: ${params.get('membership')}</p>
<p>Form submitted on ${params.get('timestamp')}</p>`;

