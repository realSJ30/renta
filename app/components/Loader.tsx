"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center h-[70vh] items-center">
      <PuffLoader size={100} color="gray" />
    </div>
  );
};

export default Loader;
