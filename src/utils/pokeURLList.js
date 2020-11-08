import getData from './getData'

const pokeURLList = async url => {
    const pokes = await getData(url)
    const pokesURLS = pokes.results.map(poke => poke.url)
    return pokesURLS
}

export default pokeURLList