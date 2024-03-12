import { Link } from "react-router-dom";
import "../style-components/navBar.css";
import auth from "../utils/auth";

const NavBar = () => {
  const isLoggedIn = auth.loggedIn();

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
  ];

  return (
    <nav className="nav main-nav">
      {navLinks.map((navLink) => (
        <div className="nav-list" key={navLink.name}>
          <ul>
            <li>
              <Link to={navLink.link}>{navLink.name}</Link>
            </li>
          </ul>
        </div>
      ))}
      <div className="nav-list">
        {isLoggedIn ? (
          <ul>
            <li>
              <Link className="nav-list" onClick={() => auth.logout()}>
                Log Out
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link className="nav-list" to={"/auth"}>Log In / Sign Up</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

// dashboard, add trip, my trips, login/signup/logout
