const API = 'https://pokeapi.co/api/v2/pokemon/'

const getData = async (poke) => {
    const URL = poke ?`${API}${poke}` :API
    try {
        const response = await fetch(URL)
        const data = await response.json()
        return data
    } catch (error) {
            console.log('Fetch error',error)
    }
}


export default getData