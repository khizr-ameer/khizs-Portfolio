import { useState } from "react";
import { aboutPara1, aboutPara2 } from "../consts";
import IntersectionAnim from "./IntersectionAnim";
import NumHeading from "./NumHeading";

const AboutContent = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleMouseLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center pt-4 pb-12 md:py-4"
    >
      <IntersectionAnim index={0} delay={0.2} type={"transLeft"}>
        <NumHeading number={1} content={"About Me"} />
      </IntersectionAnim>
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="greyish-color text-lg w-full md:w-2/3">
          <IntersectionAnim index={1} delay={0.2} type={"transRight"}>
          <div className="pb-4" dangerouslySetInnerHTML={{__html: aboutPara1}}></div>
          </IntersectionAnim>
          <IntersectionAnim index={1} delay={0.3} type={"transRight"}>
            <div className="pb-4" dangerouslySetInnerHTML={{__html: aboutPara2}}></div>
          </IntersectionAnim>
        </div>
        <div className="w-full md:w-1/2 lg:w-80 max-w-80 md:max-w-full p-4 aspect-square relative flex">
          <img
            className={`aspect-square object-cover rounded-md absolute bg-gray-200 dark:bg-gray-800 transition-all duration-500 ${
              isImageHovered && "scale-105"
            }`}
            src="profile.png"
            alt="profile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
