const source = 'data/members.json';
const cards = document.querySelector('#company-cards');

async function getSpotlightData() {
    const response = await fetch(source);
    const data = await response.json();
    // console.table(data.members);
    const selectedMembers = selectRandomMembers(data.members);
    // console.log(selectedMembers);
    displaySelectedMembers(selectedMembers);
}

function selectRandomMembers(memberList) {
    const goldMembers = memberList.filter(member => member.membership === "Gold");
    const silverMembers = memberList.filter(member => member.membership === "Silver");

    const selectedSilver = [];
    const silverCopy = [...silverMembers];

    const randomGold1 = Math.floor(Math.random() * goldMembers.length);
    const selectedGold = goldMembers[randomGold1];

    const randomSilver1 = Math.floor(Math.random() * silverCopy.length);
    selectedSilver.push(silverCopy[randomSilver1]);
    silverCopy.splice(randomSilver1, 1);

    const randomSilver2 = Math.floor(Math.random() * silverCopy.length);
    selectedSilver.push(silverCopy[randomSilver2]);

    return [...selectedSilver, selectedGold];
}

const displaySelectedMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let icon = document.createElement("img");
        let membership = document.createElement('p');

        icon.setAttribute("src", member.image);
        icon.setAttribute("alt", `Logo for ${member.name}`);
        icon.setAttribute("loading", "lazy");
        icon.setAttribute("width", 64);
        icon.setAttribute("height", 64);

        name.innerHTML = member.name;
        address.innerHTML = `<strong>Address: </strong>${member.address.street}, ${member.address.city}, ${member.address.planet}`;
        phone.innerHTML = `<strong>Phone Number:</strong> ${member.phone}`;
        membership.innerHTML = `<strong>Membership:</strong> ${member.membership}`;
        website.setAttribute('href', '#');
        website.textContent = member.website;


        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        cards.appendChild(card);
    });
}

getSpotlightData();