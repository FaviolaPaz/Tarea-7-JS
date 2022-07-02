
const container = document.getElementById("container");
const endpoint = 'https://rickandmortyapi.com/api/character';

class Character {
    constructor(nombre, especie, imagen) {
        this._nombre = () => nombre;
        this._especie = ()=> especie;
        this._imagen = ()=> imagen;
    }
    get nombre() {
        return this._nombre();
    }
    get especie() {
        return this._especie();
    }
    get imagen() {
        return this._imagen();
    }
    show() {
        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "15rem";
        const p1 = document.createElement("p");
        p1.className = "card-text";
        p1.innerHTML = this.nombre;
        const p2 = document.createElement("p");
        p2.className = "card-text";
        p2.innerHTML = this.especie;
        const characterImage = document.createElement("img");
        characterImage.className = "card-img-top";
        characterImage.src = this.imagen;
        card.appendChild(characterImage);
        card.appendChild(p1);
        card.appendChild(p2);
        container.appendChild(card);
    }
}

const getCharacters = async () => {
    try {
        const request = await fetch(endpoint);
        const data = await request.json();
        const characters = data.results;
        characters.forEach( character => {
            const personaje = new Character(character.name, character.species, character.image);
            personaje.show();
        }); 
    } catch (error) {
        console.log(error)
    }
}
getCharacters();




