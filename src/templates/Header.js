const Header = () => {
    const view = `
    <nav>
        <ul>
            <li><a href="/dist/#/">Home</a></li>
            <li> <a href="#/Show"> Show</a>
                <ul class="options">
                    <li><a href="">All</a></li>
                    <li><a href="#/Kanto">Kanto</a></li>
                    <li><a href="#/Johto">Johto</a></li>
                    <li><a href="#/Hoenn">Hoenn</a></li>
                    <li><a href="#/Sinnoh">Sinnoh</a></li>
                    <li><a href="#/Unova">Unova</a></li>
                    <li><a href="#/Kalos">Kalos</a></li>
                    <li><a href="#/Alola">Alola</a></li>
                    <li><a href="#/Galar">Galar</a></li>
                </ul>
            </li>
            <li><a href="#/Contact">Contact</a></li>
            <li><a href="#/About">About</a></li>
        </ul>
    </nav>
    `
    return view
}

export default Header