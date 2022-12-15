
let starDiv = document.getElementById('starwarsarea'),
    cardDiv = document.getElementById('cardarea'),
    star = document.querySelector('#starInput'),
    cardUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1",
    starUrl = "https://www.swapi.tech/api/people/?name=";


export async function starWars() {

    starDiv.replaceChildren();

    const response = await fetch(`${starUrl}${star.value}`);
    const data = await response.json();

    if (data.result === undefined || data.result[0] === undefined) {
        return starDiv.append('Something went wrong - try to write a character name');       
    }
    
    data.result.forEach(e => {
        starDiv.append(`${e.properties.name} is 
        ${e.properties.height} cm, weighs 
        ${e.properties.mass} kg and are a 
        ${e.properties.gender} with 
        ${e.properties.hair_color} hair color.`);
    });
    
}


export async function showcard() {
    
    cardDiv.replaceChildren();
    
    const response = await fetch(cardUrl);
    const data = await response.json();

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', data.cards[0].image);
    cardDiv.appendChild(imgElement);
    
}


