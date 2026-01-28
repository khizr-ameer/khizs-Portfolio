import IntersectionAnim from "./IntersectionAnim";
import SocialIconsBar from "./SocialIconsBar";

const FixedSocialIconBar = () => {
  return (
    <div className="fixed bottom-0 left-6 lg:left-12 z-40">
      <IntersectionAnim index={10} delay={0.15} type={""}>
        <div className="hidden md:flex flex-col items-center">
          <SocialIconsBar isColumn={true} />
          <div className="mt-3 w-px h-20 bg-slate-700 dark:bg-slate-400"></div>
        </div>
      </IntersectionAnim>
    </div>
  );
};

export default FixedSocialIconBar;
