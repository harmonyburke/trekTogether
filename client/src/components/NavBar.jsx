import { Link } from 'react-router-dom';
import "../style/navBar.css"

const NavBar = () => {
    return ( 
        <nav className="nav main-nav">

        <ul>
          <li className='nav-list'>
              <Link className="dashboard-link" 
              to="/"
              >Dashboard</Link>
          </li>

          <li className='nav-list'>
              <Link className="my-trips-link" 
              to="/my-trips"
              >My Trips</Link>
          </li>

          <li className='nav-list'>
              <Link className="add-trip-link" 
              to="/add-trip"
              >Add Trip</Link>
              </li>

          <li className='nav-list'>
              <Link className="login-signup-link" 
              to="/login-signup"
              >Log in/Sign Up</Link>
          </li>
        </ul>
          
      </nav>
    );
}
 
export default NavBar;

// dashboard, add trip, my trips, login/signup/logout