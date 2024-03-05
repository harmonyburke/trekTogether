import { Link } from 'react-router-dom';
import "../style-components/navBar.css"

const NavBar = () => {

    const navLinks = [
        {
            link: "/",
            name: "Dashboard",
        },
        {
            link: "/mytrips",
            name: "My Trips",
        },
        {
            link: "/addtrip",
            name: "Add Trip",
        },
        {
            link: "/auth",
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