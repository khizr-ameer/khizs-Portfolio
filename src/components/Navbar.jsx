import React, { useState } from "react";
import IntersectionAnim from "./IntersectionAnim";
import ThemeBtn from "./ThemeBtn";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";
import MenuModal from "./MenuModal";

const Navbar = () => {
  const navItems = ["About", "Skills", "Projects", "Contact"];
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuModalOpen(prev => !prev);
  };

  return (
    <nav className="flex items-center justify-between w-full px-4 md:px-6 lg:px-12 pt-3 pb-2 font-mono shadow-sm">
      <IntersectionAnim index={0} delay={0.1} type={"transDown"}>
        <div className="md:px-4">
          <a href="/">
            <img className="w-12" src="/logo.png" alt="logo" />
          </a> 
        </div>
      </IntersectionAnim>
      <div className="hidden md:flex">
        <ul className="flex items-end">
          {navItems.map((item, index) => (
            <IntersectionAnim
              key={index}
              index={index}
              delay={0.1}
              type={"transDown"}
            >
              <li className="px-4 py-3 text-sm" key={index}>
                <a className="greyish-primary" href={`#${item.toLowerCase()}`}>
                  <span className="primary-color">0{index + 1}. </span>
                  {item}
                </a>
              </li>
            </IntersectionAnim>
          ))}
        </ul>
        <IntersectionAnim
          index={navItems.length}
          delay={0.1}
          type={"transDown"}
        >
          <ThemeBtn />
        </IntersectionAnim>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        <IntersectionAnim index={1} delay={0.1} type={"transDown"}>
          <MenuIcon />
        </IntersectionAnim>
      </div>
      <MenuModal isOpen={isMenuModalOpen}>
        <div className="flex flex-col md:hidden">
          <div className="flex justify-end">
            <ThemeBtn />
            <div className="px-4 py-3" onClick={toggleMenu}>
              <CloseIcon />
            </div>
          </div>
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li className="px-4 py-3 text-sm" key={index}>
                <a
                  className="greyish-primary"
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuModalOpen(false)}
                >
                  <span className="primary-color"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </MenuModal>
    </nav>
  );
};

export default Navbar;
