import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import creators from "../JSONdata/creators.json";
import "../style-components/footer.css";

const Footer = () => {
  const socialIcons = {
    githubIcon: faGithub,
    linkedinIcon: faLinkedin,
    instagramIcon: faInstagram,
  };

  return (
    <footer>
      <h3 className="title">Created By:</h3>
      {creators.map((creator) => (
        <div key={creator.name} className="creator-container">
          <div className="creator">
            <p>{creator.name}</p>
            <ul>
              <li>
                {/* Conditionally render icon if link has been provided */}
                {creator.githubLink && (
                  <a href={creator.githubLink}>
                    <FontAwesomeIcon
                      className="icon-size icon"
                      icon={socialIcons.githubIcon}
                    />
                  </a>
                )}
              </li>
              <li>
                {/* Conditionally render icon if link has been provided */}
                {creator.linkedinLink && (
                  <a href={creator.linkedinLink}>
                    <FontAwesomeIcon
                      className="icon-size icon"
                      icon={socialIcons.linkedinIcon}
                    />
                  </a>
                )}
              </li>
              <li>
                {/* Conditionally render icon if link has been provided */}
                {creator.instagramLink && (
                  <a href={creator.instagramLink}>
                    <FontAwesomeIcon
                      className="icon-size icon"
                      icon={socialIcons.instagramIcon}
                    />
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      ))}
      <p>&copy;2024 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
