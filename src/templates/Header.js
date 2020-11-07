const Header = () => {
    const view = `
    <nav>
        <ul>
            <li><a href="/dist/#/">Home</a></li>
            <li> <a href="#/Show"> Show</a>
                <ul class="options">
                    <li><a href="">All</a></li>
                    <li><a href="">Kanto</a></li>
                    <li><a href="">Johto</a></li>
                    <li><a href="">Hoen</a></li>
                    <li><a href="">Sinoh</a></li>
                    <li><a href="">Unova</a></li>
                    <li><a href="">Kalos</a></li>
                    <li><a href="">Alola</a></li>
                    <li><a href="">Galar</a></li>
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