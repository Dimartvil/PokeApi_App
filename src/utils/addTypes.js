import getHash from '../utils/getHash'
import getData from '../utils/getData'


const addTypes = async() =>{
    const poke = getHash();
    const PokeInfo = await getData(poke)

    const $POKE = document.querySelector('.character-item-self')

    $POKE.classList.add(`${PokeInfo.types[0].type.name}`)
}

export default addTypes