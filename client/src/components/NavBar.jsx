import { Link } from 'react-router-dom';
import "../style/navBar.css"

const NavBar = () => {

    const navLinks = [
        {
            link: "/",
            name: "Dashboard",
        },
        {
            link: "/my-trips",
            name: "My Trips",
        },
        {
            link: "/add-trip",
            name: "Add Trip",
        },
        {
            link: "/login-signup",
            name: "Log In/Sign Up",
        },
    ]

    return ( 
        <nav className="nav main-nav">
            {navLinks.map((navLink) => (
                <div className='nav-list' key={navLink.name}>
                     <ul>
                        <li >
                        <Link 
                        to={navLink.link}
                        >{navLink.name}</Link>
                        </li>
                    </ul>
                </div>
            ))}
       
          
      </nav>
    );
}
 
export default NavBar;

// dashboard, add trip, my trips, login/signup/logout