const resolveRoutes= (route) => {
let validRoute
    switch (route) {
        case '/': validRoute= route;
            break
        case 'contact':
        case 'show':
        case 'about': 
        case 'kanto': 
        case 'johto':
        case 'hoenn': 
        case 'sinnoh':
        case 'unova':
        case 'kalos':  
        case 'alola':   
        case 'galar':               
            validRoute=  `/${route}`
            break;
    
        default:
            validRoute = '/poke';
    }

    return validRoute
}


export default resolveRoutes