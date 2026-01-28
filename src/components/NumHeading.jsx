import React from "react";

const NumHeading = ({ number, content }) => {
  return (
    <div className="flex items-center gap-5 pb-8">
      <h2>
        <span className="font-mono font-medium primary-color text-xl">
          0{number}.{" "}
        </span>
        <span className="font-sans font-bold secondary-color text-2xl tracking-wide">
          {content}
        </span>
      </h2>
      <hr className="w-1/3 greyish-color border-slate-400 dark:border-slate-700" />
    </div>
  );
};

export default NumHeading;
