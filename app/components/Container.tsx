"use client";
import React from "react";


interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16">
      {children}
    </div>
  );
};

export default Container;
