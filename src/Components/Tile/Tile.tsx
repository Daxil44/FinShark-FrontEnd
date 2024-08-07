import { title } from "process";
import React from "react";

interface Props {

    children?: React.ReactNode; 
    title: string;
    subTitle: string;
}

function Tile({title,subTitle}: Props) {
  return (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <div className="flex-auto p-6">
          <div className="flex flex-col">
            <h5 className="text-blueGray-500 uppercase font-semibold text-xs mb-2">
              {title}
            </h5>
            <p className="text-blueGray-800 font-bold text-lg">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tile;
