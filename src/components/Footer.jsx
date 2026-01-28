import SocialIconsBar from "./SocialIconsBar";
import { githubLink } from "../consts";

const Footer = () => {
  return <footer className="flex flex-col items-center p-4 pb-10">
    <div className="md:hidden"><SocialIconsBar /></div>
    <a href={githubLink} className="font-mono primary-color text-sm">Designed and Develop by Khizar Ameer</a>
  </footer>;
};

export default Footer;
