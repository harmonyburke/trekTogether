import "../style-components/header.css"
import logo from '../assets/trekTogether.png'

import NavBar from "./NavBar"

const Header = () => {

    const trek = 'trek'
    const together = 'Together'
    const slogan = '-Flee With Friends-'


    return (
         <header className="header">
            <div>
                <a href="/"><img id="logo" src={logo}/></a>
            <h1>
                <a href="/" id="trek">{trek}
                <span className="title green">{together}</span>
                </a>
            </h1>
            <p className="slogan">{slogan}</p>
            <NavBar />
            </div>
         </header> );
}
 
export default Header;