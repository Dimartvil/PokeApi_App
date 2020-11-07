const resolveRoutes= (route) => {
let validRoute
    switch (route) {
        case '/': validRoute= route;
            break
        case 'contact':
        case 'show':
        case 'about':     
            validRoute=  `/${route}`
            break;
    
        default:
            validRoute = '/poke';
    }

    return validRoute
}


export default resolveRoutes