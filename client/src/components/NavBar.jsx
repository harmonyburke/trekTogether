import { Link } from 'react-router-dom';
import "../style-components/navBar.css"

const NavBar = () => {

    const isLoggedIn = false

    const navLinks = [
        {
            link: "/",
            name: "Dashboard",
        },
        {
            link: isLoggedIn ? "/mytrips" : "/auth",
            name: "My Trips",
        },
        {
            link: isLoggedIn ? "/addtrip" : "/auth",
            name: "Add Trip",
        },
        {
            link: isLoggedIn ? "/" : "/auth", //Conditionally set the link based on login status
            name: isLoggedIn ? "Log Out" : "Log In/Sign Up" //Conditionally set the link based on login status
        }
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