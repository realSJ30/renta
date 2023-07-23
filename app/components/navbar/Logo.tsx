"use client";

import { useRouter } from "next/navigation";
import { MdBedroomParent } from "react-icons/md";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center justify-center gap-2 cursor-pointer group"
    >
      <MdBedroomParent
        color="black"
        size={38}
        className="hidden md:block"
        onClick={() => router.push("/")}
      />
      <h1 className="text-black font-bold text-2xl hidden md:block text-opacity-80 group-hover:text-opacity-100 transition">
        renta
      </h1>
    </div>
  );
};

export default Logo;
