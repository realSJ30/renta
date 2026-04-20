"use client";

import { useRouter } from "next/navigation";
import { MdBedroomParent } from "react-icons/md";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center gap-2 cursor-pointer group select-none"
    >
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-sm">
        <MdBedroomParent color="white" size={22} />
      </div>
      <h1 className="text-slate-900 font-bold text-xl tracking-tight hidden sm:block group-hover:text-indigo-700 transition">
        renta
      </h1>
    </div>
  );
};

export default Logo;
