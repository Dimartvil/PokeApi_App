import getHash from '../utils/getHash'
import getData from '../utils/getData'
import addTypes from '../utils/addTypes'

const Poke = async() =>{
    const poke = getHash();
    const PokeInfo = await getData(poke)
    const view = 
    `  
            <article class="character-item-self">
                    <h2># ${PokeInfo.id}</h2>
                    <h2>${PokeInfo.name}</h2>  
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PokeInfo.id}.png" alt="${PokeInfo.name}">       
                    <div class="types-self">
                        <h3>Type: </h3>
                        ${ PokeInfo.types.map(typo => 
                        `
                        <span>${typo.type.name}</span>
                         `
                        ).join('')}
                    </div>
                    <div class="pokemon-info">
                        <div class="abilities">
                            <h3>Abilities: </h3>
                            ${PokeInfo.abilities.map(abil => `
                            <span class="hidden_${abil.is_hidden}">${abil.ability.name} </span>
                            `).join('')
                            }
                        </div>
                    </div>
            </article>   
    `
    addTypes() 
    return view
}

export default Poke