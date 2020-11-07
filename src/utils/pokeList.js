import getDataURL from './getDataURL'


const pokeList =  async URLS => {
    const pokeInfo = []
    const PROMISES =  URLS.map( url =>  getDataURL(url))
    await Promise
        .all(PROMISES)
        .then(result => pokeInfo.push(result))
    return pokeInfo
}

export default pokeList