const source = 'data/members.json';

const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch(source);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let icon = document.createElement("img");

        icon.setAttribute("src", member.image);
        icon.setAttribute("alt", `Logo for ${member.name}`);
        icon.setAttribute("loading", "lazy");
        icon.setAttribute("width", 64);
        icon.setAttribute("height", 64);

        name.innerHTML = member.name;
        address.innerHTML = `<strong>Address: </strong>${member.address.street}, ${member.address.city}, ${member.address.planet}`;
        phone.innerHTML = `<strong>Phone Number:</strong> ${member.phone}`;
        website.setAttribute('href', '#');
        website.textContent = member.website;


        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);
    });
}