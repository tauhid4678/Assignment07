import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-between  text-white text-center py-10">
      <div className=" flex-col py-15 px-68 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl ">
        <div>
          <h1 className="text-xl mb-3">In-process</h1>
          <h1 className="text-3xl">0</h1>
        </div>
      </div>
      <div className=" flex-col  py-15 px-68 bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl">
        <h1 className="text-xl mb-3">Resolve</h1>
        <h1 className="text-3xl">0</h1>
      </div>
    </div>
  );
};

export default Banner;
