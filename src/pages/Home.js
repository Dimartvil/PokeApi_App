import pokeURLList from '../utils/pokeURLList'
import pokeList from '../utils/pokeList'



const Home = async () => {
     const URLS = await pokeURLList()
     const PokeInfo = await pokeList(URLS)
     PokeInfo[0].map(poke => console.log(poke.name) )
     console.log(PokeInfo[0][1].types)
        const view = 
    `
    <div class="characters">   
        ${
            PokeInfo[0].map(poke => `
            <article class="character-item">
                <a href="#/${poke.name}">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png" alt="${poke.name}">
                    <h2>${poke.name}</h2> 
                </a>
                ${poke.types.map(typo => `
                    <span>${typo.type.name}</span>
                `).join('')}
            </article>   
            `).join('')
        }

    </div>
    `
    return view

}


export default Home 


