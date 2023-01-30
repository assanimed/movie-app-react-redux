import React from "react";

const TitlePreviewSke = () => {
  return (
    <div>
      <div className="w-full animate-pulse max-w-4xl border dark:border-none p-3 flex flex-col gap-5">
        <div className=" w-full flex flex-col sm:flex-row gap-5">
          <div className="bg-slate-200 w-80 rounded aspect-[2/3]">
            {/* {POSTER} */}
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="w-40 h-8 bg-slate-200 text-3xl mb-2 text-indigo-900 dark:text-indigo-300">
              {/* { Title } */}
              {/* div */}
            </div>

            <div className=" w-40 h-5 bg-slate-200">
              {/* release Date */} {/* country */}
            </div>
            <div className=" w-40 h-5 bg-slate-200 mt-1">
              <span> {/* duration */} </span>
            </div>
            <div className="  w-16 aspect-square bg-slate-200 mt-2">
              {/* {rating} */}
            </div>
            <div className="w-full text-xs sm:text-sm indent-3 mt-5">
              {/* {plot} */}
              <div className=" ml-5 box-border w-[calc(100% - 1.25rem)] h-5 bg-slate-200 mt-1"></div>
              <div className=" w-full h-5 bg-slate-200 mt-1"></div>
              <div className=" w-full h-5 bg-slate-200 mt-1"></div>
            </div>
          </div>
        </div>
        <div className="h-[5px] bg-slate-200 rounded"></div>
        <div className="flex bg-slate-200 w-full aspect-video justify-center">
          {/* {Featred Scene} */}
        </div>
      </div>
    </div>
  );
};

export default TitlePreviewSke;
