import Home from '../pages/Home'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import Poke from '../pages/Poke'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import Kanto from '../pages/Kanto'
import Johto from '../pages/Johto'
import Hoenn from '../pages/Hoenn'
import Sinnoh from '../pages/Sinnoh'
import Unova from '../pages/Unova'
import Kalos from '../pages/Kalos'
import Alola from '../pages/Alola'
import Galar from '../pages/Galar'
import Loading from '../pages/Loading'
import toggleMenu from  '../utils/toggleMenu'
// import addTypes from '../utils/addTypes'



const routes = {
    '/' : Home,
    '/poke' : Poke,
    '/kanto': Kanto,
    '/johto': Johto,
    '/hoenn': Hoenn,
    '/sinnoh': Sinnoh,
    '/unova': Unova,
    '/kalos': Kalos,
    '/alola': Alola,
    '/galar': Galar
}



const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    const footer = null || document.getElementById('footer')
    header.innerHTML = Header()
    footer.innerHTML = Footer()
    let hash =  getHash()
    let route = resolveRoutes(hash)
    let render = routes[route] ?routes[route] :Error404 
    content.innerHTML = Loading()
    content.innerHTML = await render()
    toggleMenu();
    // addTypes();
}

export default router