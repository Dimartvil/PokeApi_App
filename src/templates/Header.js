const Header = () => {
    const view = `
    <nav>
        <span class="menu-button">Menu</span>
        <ul class="menu"> 
            <li><a href="/">Home</a></li>
            <li><a href="#/Kanto">Kanto</a></li>
            <li><a href="#/Johto">Johto</a></li>
            <li><a href="#/Hoenn">Hoenn</a></li>
            <li><a href="#/Sinnoh">Sinnoh</a></li>
            <li><a href="#/Unova">Unova</a></li>
            <li><a href="#/Kalos">Kalos</a></li>
            <li><a href="#/Alola">Alola</a></li>
            <li><a href="#/Galar">Galar</a></li>
        </ul>
    </nav>
    `
    return view
}

export default Header