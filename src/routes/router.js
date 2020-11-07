import Home from '../pages/Home'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'



const routes = {
    '/' : Home,
}



const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    const footer = null || document.getElementById('footer')
    header.innerHTML = Header()
    footer.innerHTML = Footer()
    let hash =  getHash()
    let route = resolveRoutes(hash)
    console.log(route)
    let render = routes[route] ?routes[route] :Error404 
    content.innerHTML = await render()
}

export default router