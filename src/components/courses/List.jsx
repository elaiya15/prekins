import React from "react";

import { Outlet } from "react-router-dom";

const List = () => {

  return (
    <div>
    {/* <h1 className=" w-[full] text-center font-Poppins font-bold text-[#000d] ">Content <span className="text-center font-Poppins font-bold text-[#f00d] " > Error</span>  Click  Home button</h1> */}
      <Outlet />
    </div>
  );
};

export default List;
