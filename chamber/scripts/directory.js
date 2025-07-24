const display = document.querySelector("#cards");
const gridButton = document.querySelector('#grid-btn');
const listButton = document.querySelector('#list-btn');

gridButton.addEventListener("click", () => {
    display.classList.remove("member-list");
    display.classList.add("member-grid");
});

listButton.addEventListener("click", () => {
    display.classList.remove("member-grid");
    display.classList.add("member-list");
});