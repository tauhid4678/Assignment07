import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="flex items-center justify-between text-white text-center py-10 gap-6">
      <div className="flex-1 flex flex-col py-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl shadow-md">
        <div>
          <h1 className="text-xl mb-3">In-process</h1>
          <h1 className="text-5xl font-bold">{inProgressCount}</h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col py-10 bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl shadow-md">
        <div>
          <h1 className="text-xl mb-3">Resolve</h1>
          <h1 className="text-5xl font-bold">{resolvedCount}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
