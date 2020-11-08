import pokeURLList from '../utils/pokeURLList'
import pokeList from '../utils/pokeList'
const urlKanto = '?limit=107&offset=386'


const Sinnoh = async () => {
     const URLS = await pokeURLList(urlKanto)
     console.log(URLS)
     const PokeInfo = await pokeList(URLS)
     PokeInfo[0].map(poke => console.log(poke.name) )
     console.log(PokeInfo[0][1].types)
        const view = 
    `
    <div class="characters">   
        ${
            PokeInfo[0].map(poke => `
            <article class="character-item ${poke.types[0].type.name}">
                <a href="#/${poke.name}">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png" alt="${poke.name}">
                    <h2>${poke.name}</h2> 
                </a>
                <div class="types">
                ${poke.types.map(typo => `
                    <span>${typo.type.name}</span>
                `).join('')}
                </div>
            </article>   
            `).join('')
        }

    </div>
    `
    return view

}


export default Sinnoh 


