import getHash from '../utils/getHash'
import getData from '../utils/getData'


const Poke = async() =>{
    const poke = getHash();
    const PokeInfo = await getData(poke)
    console.log(PokeInfo)
    const view = 
    `
    <div class="characters-self">   
            <article class="character-item-self"> 
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PokeInfo.id}.png" alt="${PokeInfo.name}">
                    <h2>Pokemon #${PokeInfo.id}</h2> 
                    <h2>${PokeInfo.name}</h2> 
                <div class="types-self">
                     <h3>Types:</h3>
                    ${ PokeInfo.types.map(typo => 
                      `
                      <span>${typo.type.name}</span>
                      `
                    ).join('')}
                </div>
                <div class="pokemon-info">
                    <div class="abilities">
                    <h3>Abilities</h3>
                        ${PokeInfo.abilities.map(abil => `
                        <span class="hidden_${abil.is_hidden}">${abil.ability.name} </span>
                        `).join('')}
                    </div>
                        
                </div>
            </article>   
    </div>
    `
        
    return view
}

export default Poke