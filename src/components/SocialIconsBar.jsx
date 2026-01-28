import {
  githubLink,
  facebookLink,
  instagramLink,
  linkedinLink,
  twitterLink,
} from "../consts.js";
import GithubIcon from "./icons/GithubIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";

const SocialIconsBar = ({ isColumn }) => {
  const icons = [
    <GithubIcon />,
    <FacebookIcon />,
    <InstagramIcon />,
    <LinkedinIcon />,
    <TwitterIcon />,
  ];
  const links = [
    githubLink,
    facebookLink,
    instagramLink,
    linkedinLink,
    twitterLink,
  ];

  return (
    <div className={`flex ${isColumn && "flex-col"}`}>
      {icons.map((icon, index) => (
        <a
          className="p-3 greyish-primary hover:-translate-y-1 hover:transition hover:duration-300"
          href={links[index]}
          target="_blank"
          key={index}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIconsBar;
