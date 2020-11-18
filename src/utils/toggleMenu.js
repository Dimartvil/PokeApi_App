const toggleMenu = () => {
    const $MENUBUTTON = document.querySelector(".menu-button")
    const $MENU = document.querySelector(".menu")
    $MENUBUTTON.addEventListener('click', () => {
        $MENU.classList.toggle('active')
    })
}


export default toggleMenu