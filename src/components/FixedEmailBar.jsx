import IntersectionAnim from "./IntersectionAnim";
import { email } from "../consts";

const FixedEmailBar = () => {
  return (
    <div className="fixed bottom-0 right-6 lg:right-12 z-30">
      <IntersectionAnim index={10} delay={0.15} type={""}>
        <div className="hidden md:flex flex-col items-center">
          <a
            className="text-sm p-3 font-mono tracking-[.02rem] greyish-primary cursor-pointer [writing-mode:vertical-lr] hover:-translate-y-1 hover:transition hover:duration-300"
            href={`mailto:khizrr.ameer@gmail.com`}
          >
            {email}
          </a>
          <div className="mt-3 w-px h-20 bg-slate-700 dark:bg-slate-400"></div>
        </div>
      </IntersectionAnim>
    </div>
  );
};

export default FixedEmailBar;
