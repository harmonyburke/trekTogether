import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "../style/footer.css";

const Footer = () => {
  const creators = [
    {
      name: "Anna Turner",
      githubLink: "https://github.com/AnnaT7459",
      githubIcon: faGithub,
      linkedinLink: "",
      linkedinIcon: faLinkedin,
      instagramLink: "",
      instagramIcon: faInstagram
    },
    {
      name: "Curtis Zahniser",
      githubLink: "https://github.com/curtiszahniser",
      githubIcon: faGithub,
      linkedinLink: "",
      linkedinIcon: faLinkedin,
      instagramLink: "",
      instagramIcon: faInstagram
    },
    {
      name: "Harmony Burke",
      githubLink: "https://github.com/harmonyburke",
      githubIcon: faGithub,
      linkedinLink: "https://www.linkedin.com/in/harmony-burke-a34878174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      linkedinIcon: faLinkedin,
      instagramLink: "",
      instagramIcon: faInstagram
    },
    {
      name: "Madeline Clark",
      githubLink: "https://github.com/madelineccstahl",
      githubIcon: faGithub,
      linkedinLink: "",
      linkedinIcon: faLinkedin,
      instagramLink: "",
      instagramIcon: faInstagram
    },
    {
      name: "Travis Shanhun",
      githubLink: "https://github.com/RaszeroT",
      githubIcon: faGithub,
      linkedinLink: "https://www.linkedin.com/in/travis-shanhun-4340b62a1/",
      linkedinIcon: faLinkedin,
      instagramLink: "https://www.instagram.com/shanhun.codes/",
      instagramIcon: faInstagram
    },
  ];

  return (
    <footer>
      <h3 className="title">Created By:</h3>
      {creators.map((creator) => (
        <div key={creator.name} className="creator-container">
          <div className="creator">
            <p>{creator.name}</p>
            <ul>
                <li>
                    <a href={creator.githubLink}>
                    <FontAwesomeIcon
                    className="icon-size icon"
                    icon={creator.githubIcon}
                    style={{ color: creator.color }}/>
                    </a>
                </li>
                <li>
                    <a href={creator.linkedinLink}>
                    <FontAwesomeIcon
                    className="icon-size icon"
                    icon={creator.linkedinIcon}
                    style={{ color: creator.color }}/>
                    </a>
                </li>
                <li>
                    <a href={creator.instagramLink}>
                    <FontAwesomeIcon
                    className="icon-size icon"
                    icon={creator.instagramIcon}
                    style={{ color: creator.color }}/>
                    </a>
                </li>
            </ul>
          </div>
        </div>
      ))}
      <p>&copy; All Rights Reserved</p>
     
    </footer>
  );
};

export default Footer;
