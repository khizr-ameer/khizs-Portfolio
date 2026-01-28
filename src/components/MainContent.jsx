import { mainDescription, mainHeading2 } from "../consts";
import IntersectionAnim from "./IntersectionAnim";
import OutlinedButton from "./OutlinedButton";

const MainContent = () => {
  return (
    <div className="calculated-vh flex flex-col justify-center py-4">
      <IntersectionAnim index={6} delay={0.1} type={"transUp"}>
        <p className="font-mono text-md sm:text-lg font-medium primary-color">
          Hi, my name is
        </p>
      </IntersectionAnim>
      <IntersectionAnim index={7} delay={0.1} type={"transUp"}>
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold secondary-color pt-4">
          Khizar Ameer.
        </h1>
      </IntersectionAnim>
      <IntersectionAnim index={8} delay={0.1} type={"transUp"}>
        <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold greyish-color pt-6 md:pt-4 md:leading-[4rem]">
          {mainHeading2}
        </h2>
      </IntersectionAnim>
      <IntersectionAnim index={9} delay={0.1} type={"transUp"}>
        <p className="font-sans md:w-2/3 text-lg greyish-color pt-9">
          {mainDescription}
        </p>
      </IntersectionAnim>
      <IntersectionAnim index={10} delay={0.1} type={"transLeft"}>
        <a href="https://drive.google.com/drive/folders/1Kyl_xNKYbOlEJXQ1rSLC9_KXi7NxqIiz?usp=sharing" target="_blank">
          <div className="pt-12 pb-20 md:pt-8 md:pb-0">
            <OutlinedButton text={"Check out my resume!"} />
          </div>
        </a>
      </IntersectionAnim>
    </div>
  );
};

export default MainContent;
