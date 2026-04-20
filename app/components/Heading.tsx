"use client";
import React from "react";

interface IHeading {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<IHeading> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </div>
      {subtitle && (
        <div className="text-sm md:text-base text-slate-500 mt-1.5">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default Heading;
