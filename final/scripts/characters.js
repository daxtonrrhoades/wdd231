// -----Character Cards-----
const source = 'data/characters.json';

const cards = document.querySelector('.character-cards');

async function getCharacterData() {
    const response = await fetch(source);
    const data = await response.json();
    // console.table(data.characters);
    displayCharacters(data.characters);
}

getCharacterData();

const displayCharacters = (characters) => {
    characters.forEach((character) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let portrait = document.createElement("img");
        let desc = document.createElement('p');
        let homeWorld = document.createElement('p');

        portrait.setAttribute("src", character.img);
        portrait.setAttribute("alt", `Logo for ${character.fName} ${character.lName}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", 118);
        portrait.setAttribute("height", "auto");

        name.innerHTML = `${character.fName} ${character.lName}`;
        desc.innerHTML = character.desc;
        homeWorld.innerHTML = `Home World: ${character.homeworld}`;

        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(desc);
        card.appendChild(homeWorld)

        cards.appendChild(card);
    });
}

// -----Layout Buttons-----
const display = document.querySelector(".character-cards");
const gridButton = document.querySelector('#grid-btn');
const listButton = document.querySelector('#list-btn');

gridButton.addEventListener("click", () => {
    display.classList.remove("character-list");
    display.classList.add("character-grid");
});

listButton.addEventListener("click", () => {
    display.classList.remove("character-grid");
    display.classList.add("character-list");
});