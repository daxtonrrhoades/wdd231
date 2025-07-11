const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");
lastModified.textContent = oLastModif.toLocaleString();