import "../style/header.css"
import logo from '../assets/trekTogether.png'

const Header = () => {

    const trek = 'trek'
    const together = 'Together'
    const slogan = '-Flee With Friends-'


    return (
         <header className="header">
            <div>
                <img id="logo" src={logo}/>
            <h1>
                <a href="/" id="trek">{trek}
                <span className="title green">{together}</span>
                </a>
            </h1>
            <p className="slogan">{slogan}</p>
            </div>
         </header> );
}
 
export default Header;