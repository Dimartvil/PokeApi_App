import getData from './getData'

const pokeURLList = async () => {
    const pokes = await getData()
    console.log(pokes)
    const pokesURLS = pokes.results.map(poke => poke.url)
    console.log(pokesURLS)
    return pokesURLS
}

export default pokeURLList